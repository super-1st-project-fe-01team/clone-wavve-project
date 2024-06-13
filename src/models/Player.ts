
export interface VideoDetailProps {
  titleImage:string; // moviegrouptitlelogoimage
  metadataList: MetadataListProps;
  synopsis: string;  // synopsis
}


export interface MetadataListProps{
  releaseYear:number;   // originalreleaseyear+"년"
  playTime:number;  // playtime
  targetAge:number; // targetage
  genres:string[];  // genre.list-> text
}

export interface PreviewProps {
  title: string; // title
  synopsis: string; // synopsis
}

export interface DetailViewProps {

  title:string;  // title
  synopsis:string;  // synopsis
  summary: string; // country, originalreleaseyear + "년"
  genreTags: string[]; // tags.list -> text
  castings: string[]; // actors.list -> text
  directors:string[]; // directors.list -> text
  targetAge: number;  // targetage

  // "주제 : 12세 / 선정성 : 전체 / 폭력성 : 12세 / 공포 : 12세 / 약물 : 전체 / 대사 : 12세 / 모방위험 : 12세",
  // 순서대로 나이만 가져오기 ex) "12세". "12세"
  deliverationInfo:string[]  // deliverationinfo

}

export interface BottomContentsProps {
  thumbnailImage: string;  // image
  preview: PreviewProps;
  detailView: DetailViewProps;
}


export interface Player{


  movieId:String;  //movieid
  brandLogoList:String[];  // brand_logolist  ex) "only"

  backdropImage: string;  // moviegroup_horizontal_logoY_image
  videoDetail: VideoDetailProps;
  bottomContents: BottomContentsProps;
}



