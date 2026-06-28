from pathlib import Path

# ==========================================================
# Project Paths
# ==========================================================

# media-service/
MEDIA_SERVICE_DIR = Path(__file__).resolve().parent

# Vidvine/
PROJECT_ROOT = MEDIA_SERVICE_DIR.parent

# Storage
STORAGE_DIR = PROJECT_ROOT / "storage"

ORIGINALS_DIR = STORAGE_DIR / "originals"
TRANSCODED_DIR = STORAGE_DIR / "transcoded"
THUMBNAILS_DIR = STORAGE_DIR / "thumbnails"

# Local media-service folders
OUTPUTS_DIR = MEDIA_SERVICE_DIR / "outputs"
LOGS_DIR = MEDIA_SERVICE_DIR / "logs"
TEMP_DIR = MEDIA_SERVICE_DIR / "temp"

# ==========================================================
# FFmpeg Configuration
# ==========================================================

FFMPEG_COMMAND = "ffmpeg"
FFPROBE_COMMAND = "ffprobe"

# ==========================================================
# Streaming Configuration
# ==========================================================

HLS_SEGMENT_DURATION = 6

VIDEO_PROFILES = [
    {
        "name": "360p",
        "width": 640,
        "height": 360,
        "video_bitrate": "800k",
        "maxrate": "856k",
        "bufsize": "1200k",
        "audio_bitrate": "96k"
    },
    {
        "name": "720p",
        "width": 1280,
        "height": 720,
        "video_bitrate": "2800k",
        "maxrate": "2996k",
        "bufsize": "4200k",
        "audio_bitrate": "128k"
    },
    {
        "name": "1080p",
        "width": 1920,
        "height": 1080,
        "video_bitrate": "5000k",
        "maxrate": "5350k",
        "bufsize": "7500k",
        "audio_bitrate": "192k"
    }
]