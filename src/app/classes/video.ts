import { Image } from '../interfaces/image';
import { VideoUrl } from '../interfaces/video-url';

export class Video {
    thumbnails: Image;
    publishedAt: string;
    title: VideoUrl;
    description: string;

    constructor(thumbnails: Image, publishedAt: string, titleValue: string, videoId: string, description: string) {
        return {
            thumbnails,
            publishedAt,
            title: {
                title: titleValue,
                videoId
            },
            description
        };
    }
}
