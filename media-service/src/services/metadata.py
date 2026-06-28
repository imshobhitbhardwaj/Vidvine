import json

from config import FFPROBE_COMMAND
from ffmpeg_utils import run_ffprobe


def get_video_metadata(video_path):
    """
    Returns only the metadata required by Vidvine.
    """

    command = [
        FFPROBE_COMMAND,
        "-v",
        "quiet",
        "-print_format",
        "json",
        "-show_format",
        "-show_streams",
        video_path,
    ]

    result = run_ffprobe(command)

    if result.returncode != 0:
        raise Exception(result.stderr)

    data = json.loads(result.stdout)

    video_stream = next(
        stream for stream in data["streams"]
        if stream["codec_type"] == "video"
    )

    audio_stream = next(
        (
            stream
            for stream in data["streams"]
            if stream["codec_type"] == "audio"
        ),
        None,
    )

    metadata = {
        "duration": float(data["format"]["duration"]),
        "size": int(data["format"]["size"]),
        "bitrate": int(data["format"]["bit_rate"]),

        "width": video_stream["width"],
        "height": video_stream["height"],

        "video_codec": video_stream["codec_name"],

        "frame_rate": video_stream["r_frame_rate"],

        "audio_codec": (
            audio_stream["codec_name"]
            if audio_stream
            else None
        ),
    }

    return metadata