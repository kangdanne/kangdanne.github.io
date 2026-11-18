# Dan KANG

디자인 배경을 가진 프론트엔드 개발자 Dan KANG의 개인 포털입니다.
이름과 GitHub·LinkedIn·한국어 개발 블로그를 연결하는 최소한의 화면으로 구성합니다.

**사이트:** https://kangdanne.github.io/

**현재 버전:** `1.0.0` — 배포 준비 중

## 파일 구성

```text
.
├── .gitignore
├── .nojekyll
├── CHANGELOG.md
├── LICENSE
├── README.md
├── VERSION
├── favicon.ico
├── index.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── og-image.png
│   └── fonts/
│       ├── geist-latin.woff2
│       └── geist-OFL.txt
├── scripts/
│   └── theme.js
└── styles/
    └── portal.css
```

설치·빌드 없이 HTML·CSS·JavaScript를 그대로 게시합니다.
`README.md`, `CHANGELOG.md`, `VERSION`, `.gitignore`, 라이선스는 소스 관리에 필요한 파일입니다.
나머지는 화면 표시·검색·공유에 사용하는 파일입니다.

비교용 시안·Inter·IBM Plex Sans·이미지 제작 원본은 로컬 `previews/`에 보관하며
`.gitignore`로 제외합니다. 기본 사이트에는 실제 사용하는 Geist와 라이선스만 포함합니다.
이전 Jekyll 템플릿, 샘플 이미지, 빈 CNAME 파일은 제거했습니다.

## 화면과 접근성

- 이름은 `Dan KANG`, 블로그 언어는 `(Korean)`으로 표기합니다.
- 브라우저 기본 링크 색상과 방문 이력을 유지하고 밑줄로 링크를 구분합니다.
- 외부 링크는 새 탭·창으로 열립니다. 인라인 SVG 아이콘과 `aria-describedby` 안내를 제공합니다.
- 링크 글자는 `1.25rem`, 줄 높이는 `1.6`입니다. 기본 글자 크기 16px일 때 20px입니다.
- 링크와 화면 모드 버튼의 클릭 영역은 기본 설정에서 최소 56px입니다.
- `main`, `nav`, 목록, 문서 언어, 키보드 초점 표시, 화면 모드의 `aria-pressed`를 사용합니다.
- SVG 아이콘은 보조 기술에서 숨기고 버튼 이름과 상태로 기능을 전달합니다.
- 화면 모드는 기본적으로 시스템 설정을 따릅니다. 우측 상단의 달·해 버튼으로 바꿀 수 있습니다.
- 가능한 경우 색상 선택을 브라우저에 저장합니다. 저장소가 차단돼도 현재 페이지의 전환은 동작합니다.
- 배경과 글자 색상을 240ms 동안 부드럽게 전환합니다.
  `prefers-reduced-motion: reduce`에서는 즉시 전환합니다.
- JavaScript가 없으면 화면 모드 버튼을 숨기고 시스템 색상 설정과 링크를 그대로 사용합니다.
- 사용자 글자 크기와 확대를 제한하지 않으며 작은 화면에서도 문서 흐름을 유지합니다.

## 메타 정보의 근거

2026-11-18 사용자 제공 정보와 공개 페이지를 확인했습니다.

| 항목 | 근거 |
| --- | --- |
| 영문 이름 `Dan KANG` | 사용자가 지정한 표기 |
| 디자인 배경·프론트엔드 개발자 | 사용자가 제공한 전공·직무 정보 |
| `KANG Dan`, `Dan:d`, `kangdanne` | [GitHub 공개 프로필](https://github.com/kangdanne)과 [블로그](https://kangdanne.tistory.com/)의 표기 |
| JavaScript·React와 문제 해결 기록 | 블로그의 JS·TS, React·Next.js 분류와 실무 글 |
| 파비콘 | [블로그의 원본 favicon.ico](https://kangdanne.tistory.com/favicon.ico)를 변경 없이 복사 |
| LinkedIn | 사용자가 제공한 [프로필 주소](https://www.linkedin.com/in/kangdanne/)를 연결. 공개 본문은 접근 제한으로 확인하지 못했으므로 회사·연차·성과는 기재하지 않음 |

블로그에서 확인한 대표 글:

- [JavaScript 금액 계산 — 반올림과 잔차 배분](https://kangdanne.tistory.com/353)
- [로그인 자동완성과 비밀번호 문제](https://kangdanne.tistory.com/349)
- [Playwright로 AI가 수정한 코드 검증하기](https://kangdanne.tistory.com/351)

메타 설명은 위 근거를 바탕으로 작성했습니다.

> Dan KANG, a frontend developer with a design background. Explore GitHub, LinkedIn, and a Korean blog on JavaScript, React, and practical problem-solving.

`index.html`에는 다음 설정을 포함합니다.

- 제목, description, author, robots, canonical
- Open Graph: 제목·소개·정규 주소·사이트 이름·언어·PNG 이미지·이미지 크기·대체 텍스트
- Twitter Card: `summary_large_image`, 제목·소개·이미지·대체 텍스트
- JSON-LD: `ProfilePage`와 `Person`, 사용자 이름·직무·확인한 별칭·세 외부 링크의 `sameAs`
- 원본 블로그 파비콘을 가리키는 로컬 링크

공유 이미지는 Geist를 사용한 1200 × 630 PNG이며 `assets/og-image.png`에 있습니다.
정규 주소·공유 주소·사이트맵은 모두 `https://kangdanne.github.io/`로 통일합니다.
화면이 영어이므로 문서 언어는 `en`, Open Graph 언어는 `en_US`입니다.
한국어 페이지를 별도로 제공하지 않으므로 대체 언어 페이지를 선언하지 않습니다.
실제 콘텐츠와 연결되지 않는 keywords나 확인되지 않은 Twitter 계정은 추가하지 않습니다.

## 로컬 실행

`index.html`을 브라우저로 열거나 저장소 루트에서 실행합니다.

```sh
python3 -m http.server 8000
```

이후 http://localhost:8000/ 에 접속합니다.
폰트·파비콘·스크립트·이미지는 모두 로컬 파일을 사용합니다.

## 버전과 브랜치

| 이름 | 용도 |
| --- | --- |
| `master` | GitHub Pages에서 게시할 브랜치 |
| `release/1.0.0` | 현재 버전의 작업·검토 브랜치 |
| `release/1.0.1` | 작은 수정 버전의 브랜치 예시 |
| `release/1.1.0` | 기능 추가 버전의 브랜치 예시 |
| `portal-v1.0.0` | 배포한 정확한 커밋에 붙일 태그 |

작업 중 `VERSION`과 `CHANGELOG.md`를 함께 갱신합니다.
배포를 확정할 때 변경 내역의 준비 중 표기를 정리하고,
`release/X.Y.Z`에서 `master`로 PR을 만들어 검토한 뒤 병합합니다.
배포 성공을 확인하고 해당 커밋에 `portal-vX.Y.Z` 태그와 GitHub Release를 만듭니다.

기존 `v1.0.0`·`v1.1.0`·`v1.2.0`은 Jekyll 템플릿의 태그이므로 그대로 두고
새 포털 태그에는 `portal-` 접두사를 사용합니다. 현재 포털 태그는 아직 생성하지 않았습니다.

## 개인 GitHub 계정으로 업로드

업로드·배포는 사용자가 지정한 개인 GitHub 계정으로 진행합니다.

1. 브라우저의 별도 창에서 개인 계정으로 GitHub에 로그인합니다.
2. `kangdanne/kangdanne.github.io` 저장소의 브랜치 선택기에서 `master`를 기준으로
   `release/1.0.0`을 만들거나 기존 버전 브랜치를 선택합니다.
3. 정리된 업로드 ZIP을 풀고, 최상위에 `index.html`이 오도록 내용물을
   **Add file → Upload files**에 업로드합니다. `.gitignore`와 `.nojekyll`도 포함합니다.
   Mac Finder에서 숨김 파일은 `⌘⇧.`으로 표시합니다.
4. 변경 사항을 커밋하고 `release/1.0.0`에서 `master`로 PR을 만듭니다.
5. 기존 템플릿 파일을 제거하는 변경까지 확인한 후 병합합니다.
6. **Settings → Pages → Deploy from a branch → master → / (root)**로 설정합니다.
   `github.io` 기본 주소를 사용하므로 Custom domain은 비워 둡니다.

브라우저 업로드는 `.gitignore`에 따라 파일을 자동으로 걸러주지 않습니다.
업로드 ZIP에는 비교 시안·임시 파일을 처음부터 넣지 않습니다.
이미 Git이 추적하는 파일은 `.gitignore`로 제외되지 않으므로,
이번 로컬 변경에는 사용하지 않는 템플릿 파일의 삭제도 포함했습니다.
Git으로 반영하면 삭제 변경도 함께 적용됩니다. 웹 업로드만 할 경우 기존 브랜치의
`404.md`, `about.md`, `CNAME`, `_config.yml`, `_includes/`, `_layouts/`, `_sass/`, `images/`, `style.scss`도 별도로 삭제합니다.

## 배포 후 확인

- 루트 페이지, 파비콘, 공유 이미지, robots.txt, sitemap.xml이 정상 응답하는지 확인합니다.
- 검색용 마크업은 [Google Rich Results Test](https://search.google.com/test/rich-results)에서 확인하고,
  Search Console에서 루트 URL을 검사하고 사이트맵을 제출합니다.
- 공유 서비스가 이전 이미지를 캐시하면 해당 서비스의 미리보기를 다시 요청합니다.

## 라이선스와 참고

[기존 저장소의 MIT 라이선스](LICENSE)를 유지합니다.
Geist는 [동봉한 SIL Open Font License](assets/fonts/geist-OFL.txt)를 따릅니다.

- [Geist 공식 페이지](https://vercel.com/font)
- [GitHub Pages 게시 브랜치](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub 파일 업로드](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [gitignore의 적용 범위](https://git-scm.com/docs/gitignore)
- [Open Graph](https://ogp.me/)
- [Google ProfilePage 문서](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
