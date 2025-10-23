# Video Organization Guide

## Folder Structure

Organize your video files in the following structure:

```
public/
└── videos/
    ├── Basic Concepts of ICT/
    │   ├── What is ICT?.mp4
    │   ├── Components of a computer system.mp4
    │   └── ... (other topic videos)
    ├── Evolution of Computers/
    │   ├── History and generations of computers.mp4
    │   └── ... (other topic videos)
    ├── Data Representation (Number Systems etc.)/
    ├── Fundamentals of Digital Circuits (Logic Gates etc.)/
    ├── Operating Systems/
    ├── Data Communication & Networking/
    ├── System Analysis & Design/
    ├── Database Management/
    ├── Programming/
    ├── Web Development/
    ├── Internet of Things (IoT)/
    ├── ICT in Business/
    ├── New Trends & Future Directions in ICT/
    └── ICT Project/
```

## Supported Video Formats

- **MP4** (Recommended) - `.mp4`
- **WebM** - `.webm`
- **MOV** - `.mov`
- **AVI** - `.avi`

## File Naming Convention

- Use the exact topic name as shown in the videos page
- Add appropriate video extension
- Example: `What is ICT?.mp4`

## Video Specifications (Recommended)

- **Resolution**: 1080p (1920x1080) or 720p (1280x720)
- **Format**: MP4 with H.264 codec
- **Duration**: 5-20 minutes per topic
- **Audio**: Clear narration with good quality
- **File Size**: Keep under 100MB for better loading

## How It Works

1. Users click on a unit to see all video topics
2. Each topic appears as a tile with video thumbnail placeholder
3. Shows estimated duration and video number
4. Clicking a tile opens/plays the corresponding video
5. Videos open in a new browser tab or can be embedded

## Video Features

- **Visual Design**: Each video tile shows:
  - Gradient thumbnail with play button
  - Video number and estimated duration
  - Topic title and lesson info
  - HD quality indicator

- **Interactive Elements**:
  - Hover effects with scale animation
  - Play button animation on hover
  - "Click to watch" indicator

## Adding New Videos

1. Create the unit folder if it doesn't exist
2. Add video files with exact topic names
3. The system will automatically find and load them
4. Consider adding custom thumbnails in the future

## Alternative Implementation Options

### YouTube Integration
```javascript
// For YouTube videos, modify handleVideoClick to use YouTube URLs:
const youtubeUrl = `https://youtube.com/watch?v=${videoId}`;
window.open(youtubeUrl, '_blank');
```

### Embedded Video Player
```javascript
// For embedded player, create a modal with video element:
<video controls width="100%" height="400">
  <source src={videoPath} type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Current Units Available

- Unit 1: Basic Concepts of ICT (6 videos)
- Unit 2: Evolution of Computers (5 videos)
- Unit 3: Data Representation (6 videos)
- Unit 4: Digital Circuits (7 videos)
- Unit 5: Operating Systems (6 videos)
- Unit 6: Data Communication & Networking (8 videos)
- Unit 7: System Analysis & Design (7 videos)
- Unit 8: Database Management (8 videos)
- Unit 9: Programming (8 videos)
- Unit 10: Web Development (7 videos)
- Unit 11: Internet of Things (6 videos)
- Unit 12: ICT in Business (5 videos)
- Unit 13: New Trends & Future Directions (5 videos)
- Unit 14: ICT Project (4 videos)

**Total: 95 video topics across 14 units**

## Tips for Content Creation

1. **Structure**: Start each video with topic overview, main content, then summary
2. **Engagement**: Use visual aids, diagrams, and practical examples
3. **Pacing**: Speak clearly and at moderate pace
4. **Quality**: Ensure good audio quality and clear screen recordings
5. **Length**: Keep videos focused - break complex topics into shorter segments