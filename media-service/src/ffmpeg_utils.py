import subprocess
from config import FFMPEG_COMMAND, FFPROBE_COMMAND


def is_ffmpeg_installed():
    """
    Check if FFmpeg is installed.
    """

    try:
        subprocess.run(
            [FFMPEG_COMMAND, "-version"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=True,
        )
        return True

    except Exception:
        return False


def is_ffprobe_installed():
    """
    Check if FFprobe is installed.
    """

    try:
        subprocess.run(
            [FFPROBE_COMMAND, "-version"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=True,
        )
        return True

    except Exception:
        return False


def run_ffmpeg(command):
    """
    Execute an FFmpeg command.
    """

    process = subprocess.run(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )

    return process


def run_ffprobe(command):
    """
    Execute an FFprobe command.
    """

    process = subprocess.run(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )

    return process