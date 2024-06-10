export interface VideoProps {
  videoUrl: string;
}


export interface titleImage {
  titleImageUrl: string;
  titleName:string;
}
export interface VideoDetailProps {
  titleImage: titleImage;
  metadataList: MetadataListProps;
  summary: string;
  notice?: string;
}

export interface AgeRestriction {
  ageImage:string;
  ageString:string;
}

export interface MetadataListProps{
  seasonEpisodeCount:string;
  ageRestriction:AgeRestriction;
  category:string;
  isClosedCaptions:boolean;
}

export interface PreviewProps {
  title: string;
  subtitle: string;
  description: string;

  // string[] or string?
  castings: string;
}

export interface DetailViewProps {
  thumbnailImage: string;
  summary: string;
  overview: string;
  genreTags: string[];

  // string[] or string?
  castings: string;
  director:string;
  ageRestriction: AgeRestriction;
}

export interface BottomContentsProps {
  preview: PreviewProps;
  detailView: DetailViewProps;
}

export interface PlayerProps{
  video: VideoProps;
  videoDetail: VideoDetailProps;
  metadataList:MetadataListProps;
  bottomContents: BottomContentsProps;
}