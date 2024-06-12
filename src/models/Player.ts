export interface VideoPictureProps {
  videoPictureUrl: string;
}


export interface titleImage {
  titleImageUrl: string;
  titleName:string;
}


export interface NoticeProps{
  title:string;
  date:string;
  content:string;
}
export interface VideoDetailProps {
  titleImage: titleImage;
  metadataList: MetadataListProps;
  summary: string;
  notice?: NoticeProps;
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
  video: VideoPictureProps;
  videoDetail: VideoDetailProps;
  bottomContents: BottomContentsProps;
}





// 작업용 mock 데이터
export const playerData: PlayerProps = {
  video: {
    videoPictureUrl: "https://image.wavve.com/v1/thumbnails/2480_1396_20_80/meta/image/202405/1716451473485481783.jpg",
  },
  videoDetail: {
    titleImage: {
      titleImageUrl: "https://image.wavve.com/v1/thumbnails/0_0_20_80/meta/image/202405/1716451492658756960.png",
      titleName: "커넥션",
    },
    metadataList: {
      seasonEpisodeCount: "시즌 1개",
      ageRestriction: {
        ageImage: "https://www.wavve.com/img/element-icons-72-x-72-ic-vod-15-years.3f150ba7.svg",
        ageString: "15세",
      },
      category: "드라마",
      isClosedCaptions: true,
    },
    summary: "누군가에 의해 마약에 강제로 중독된 마약팀 에이스 형사가 변질된 우정, 그 커넥션의 전말을 밝혀내는 중독추적서스펜스",
    notice: {
      title:"<커넥션> 자막 서비스 안내",
      date:"2024-06-07",
      content:"안녕하세요. Wavve(웨이브) 입니다.\n" +
          "\n" +
          "방송사 정책으로 <커넥션> 5회부터는 자막 on/off 설정이 불가합니다.\n" +
          "\n" +
          "이용에 참고 부탁드립니다.\n" +
          "감사합니다.",
    },
  },
  bottomContents: {
    preview: {
      title: "커넥션",
      subtitle: "현재 에피소드 :1. ‘우리 마약팀 안현경찰서의 자랑이다’",
      description: "안현경찰서 마약팀 에이스 장재경. 마약범과 사투로 분주한 어느 날, 이십 년간 연락 없던 친구 박준서가 찾아온다. 이튿날 박준서는 싸늘한 주검으로 발견되고 재경은 괴한들에 납치되어 강제로 마약에 중독된다",

      // string[] or string?
      castings: "지성, 전미도",
    },
    detailView: {
      thumbnailImage: "https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202405/1716451478418939196.webp",
      summary: "누군가에 의해 마약에 강제로 중독된 마약팀 에이스 형사가 변질된 우정, 그 커넥션의 전말을 밝혀내는 중독추적서스펜스",
      genreTags: ["#범죄", "#스릴러"],

      // string[] or string?
      castings: "지성, 전미도",

      director: "김문교",
      ageRestriction: {
        ageImage: "https://www.wavve.com/img/element-icons-72-x-72-ic-vod-15-years.3f150ba7.svg",
        ageString: "15세",
      },
    },
  },
};
