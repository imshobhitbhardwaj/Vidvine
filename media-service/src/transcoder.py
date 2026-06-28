import sys
# from pprint import pprint
import json

from ffmpeg_utils import (
    is_ffmpeg_installed,
    is_ffprobe_installed,
)

from services.metadata import get_video_metadata


def main():

    if not is_ffmpeg_installed():
        print("FFmpeg not found.")
        return

    if not is_ffprobe_installed():
        print("FFprobe not found.")
        return

    if len(sys.argv) != 2:
        print("Usage:")
        print("python transcoder.py <video_path>")
        return

    video_path = sys.argv[1]

    metadata = get_video_metadata(video_path)

    # pprint(metadata)

    print(json.dumps(metadata, indent=2))


if __name__ == "__main__":
    main()