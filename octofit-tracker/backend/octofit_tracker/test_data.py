# Test data for Octofit Tracker (based on Mona High School Fitness Tracker)
# This file can be imported in management/commands/populate_db.py

test_data = {
    "users": [
        {"username": "thundergod", "email": "thundergod@mhigh.edu", "password": "thundergodpassword"},
        {"username": "metalgeek", "email": "metalgeek@mhigh.edu", "password": "metalgeekpassword"},
        {"username": "zerocool", "email": "zerocool@mhigh.edu", "password": "zerocoolpassword"},
        {"username": "crashoverride", "email": "crashoverride@mhigh.edu", "password": "crashoverridepassword"},
        {"username": "sleeptoken", "email": "sleeptoken@mhigh.edu", "password": "sleeptokenpassword"}
    ],
    "teams": [
        {"name": "Blue Team", "members": [0, 1, 2]},
        {"name": "Gold Team", "members": [3, 4]}
    ],
    "activities": [
        {"user": 0, "activity_type": "Cycling", "duration": 60},
        {"user": 1, "activity_type": "Crossfit", "duration": 120},
        {"user": 2, "activity_type": "Running", "duration": 90},
        {"user": 3, "activity_type": "Strength", "duration": 30},
        {"user": 4, "activity_type": "Swimming", "duration": 75}
    ],
    "leaderboard": [
        {"user": 0, "score": 100},
        {"user": 1, "score": 90},
        {"user": 2, "score": 95},
        {"user": 3, "score": 85},
        {"user": 4, "score": 80}
    ],
    "workouts": [
        {"name": "Cycling Training", "description": "Training for a road cycling event"},
        {"name": "Crossfit", "description": "Training for a crossfit competition"},
        {"name": "Running Training", "description": "Training for a marathon"},
        {"name": "Strength Training", "description": "Training for strength"},
        {"name": "Swimming Training", "description": "Training for a swimming competition"}
    ]
}
