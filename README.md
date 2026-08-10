# AInWorks.github.io

AIn Works 조직 소개 페이지. → https://ainworks.github.io

빌드 도구 없는 순수 정적 사이트입니다. `main` 브랜치 루트를 GitHub Pages가 그대로 서빙합니다.

```
index.html            모든 섹션(소개/하는 일/프로젝트/팀/연락)
assets/css/style.css  스타일 (라이트·다크는 prefers-color-scheme 자동)
assets/js/main.js     모바일 메뉴, 스크롤 등장, 내비 활성화
assets/img/           파비콘 등
```

## 로컬 확인

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 내용 수정

문구·프로젝트·멤버는 전부 `index.html` 안에 있습니다.
아직 채우지 않은 부분은 `<!-- TODO -->` 주석으로 표시해 두었습니다.
