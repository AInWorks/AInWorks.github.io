# AInWorks — 웹사이트

Astro 기반 정적 사이트. 빌드 산출물은 HTML 한 장(약 28KB)이고 프레임워크 런타임 JS는 나가지 않는다.

## 개발

```bash
npm install
npm run dev -- --host   # Tailscale/LAN 에서 접속 가능
npm run build           # -> dist/
npm run preview
```

## 구조

| 경로 | 역할 |
|---|---|
| `src/styles/global.css` | **디자인 토큰 전부.** 색·타입 스케일·여백. `--accent` 한 줄로 톤이 바뀐다 |
| `src/layouts/Base.astro` | 문서 껍데기, 폰트 로드, 스크롤 등장 옵저버 |
| `src/components/Nav.astro` | 상단 내비 + 모바일 메뉴(JS 없이 `<details>`) |
| `src/components/Footer.astro` | 푸터 + 사업자 정보 |
| `src/pages/index.astro` | 단일 페이지. 상단 `services` / `work` / `team` 배열만 고치면 본문이 따라온다 |

## 디자인 원칙

- 타이포 중심 미니멀. 본문·UI 는 Pretendard 1종, 포인트만 Instrument Serif 이탤릭.
- 액센트 색은 **한 개**(테라코타). 링크 밑줄·섹션 번호·워드마크의 `I` 에만 쓴다. 버튼을 액센트로 칠하지 않는다.
- 스톡 이미지를 넣지 않는다. 실제 제품 스크린샷·팀 사진이 생기기 전까지는 타입과 괘선으로 화면을 만든다.
- 모션은 스크롤 진입 시 12px 상승 + 페이드가 전부. `prefers-reduced-motion` 을 존중한다.
- 다크모드는 `prefers-color-scheme` 로 자동 대응(토글 없음).

## 남은 일

- [ ] 카피 확정 — 파일 안의 `TODO` 가 전부 자리표시자다
- [ ] 푸터 사업자 정보(상호·대표자·사업자등록번호·주소) — 국내 법인 사이트 표기 의무
- [ ] `astro.config.mjs` 의 `site` 를 실제 도메인으로 교체
- [ ] 배포 연결 (Cloudflare Pages: build `npm run build`, output `dist`)
- [ ] OG 이미지
