/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이정준",
    nameEn: "JEONGJOON LEE",
    father: "이갑재",
    mother: "이미옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "박유민",
    nameEn: "YOOMIN PARK",
    father: "박정현",
    mother: "손명주",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-07-18",
    time: "17:20",
    venue: "더링크서울 트리뷰트 포트폴리오 호텔",
    hall: "3층 베일리홀",
    address: "서울 구로구 경인로 610",
    tel: "02-852-5000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/869232764",
      naver: "https://naver.me/FqWtKQUF"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message: "함께 있을 때 가장 나다워지는 사람,\n미소마저 닮아있는 사람을 만나\n푸르른 녹음이 짙어가는 여름날,\n햇살에 물든 뜨거운 사랑을 품고 두 사람의 여정을 시작합니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이정준", bank: "토스뱅크", number: "1000-1534-6615" },
      { role: "아버지", name: "이갑재", bank: "국민은행", number: "476-05-0000-839" },
      { role: "어머니", name: "이미옥", bank: "카카오뱅크", number: "3333-21-5235810" }
    ],
    bride: [
      { role: "신부", name: "박유민", bank: "국민은행", number: "591902-01-264514" },
      { role: "아버지", name: "박정현", bank: "국민은행", number: "173-21-0027-712" },
      { role: "어머니", name: "손명주", bank: "우리은행", number: "808-191886-02-101" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "결혼식에 초대합니다",
    description: "준윰 결혼식에 참여해주세요."
  }
};
