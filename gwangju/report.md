# 광주 문서 인덱스

- `files/` — 원본 문서
- `scripted/` — 추출 Markdown
- `summary/` — 요약 문서
- `timeline.md` — 시간순 기록
- `master.md` — 통합 서술

## 확인된 문서

- `20180104_광주역세권_실시계획인가_고시.pdf` (https://www.gjcity.go.kr/portal/bbs/view.do?bIdx=269927&ptIdx=29&mId=0301040000)
- `20231226_광주역세권_개발계획_12차변경_및_실시계획_10차변경_인가_고시문.hwp` (https://www.gjcity.go.kr/portal/bbs/view.do?bIdx=269927&ptIdx=29&mId=0301040000)
- `20240215_광주역세권_도시개발사업_공사완료_공고문.hwp` (https://www.gjcity.go.kr/portal/bbs/view.do?bIdx=269927&ptIdx=29&mId=0301040000)
- `광주역세권_지구단위계획_시행지침.pdf` (https://www.gjcity.go.kr/portal/bbs/view.do?bIdx=269927&ptIdx=29&mId=0301040000)

## 상태

- 이번 실행에서 로컬 원본 문서 목록을 갱신했다.
- 광주시 공식 페이지에서 2024년의 구역해제 고시와 2025년의 관련 지구단위계획 / 실시계획 변경 고시를 확인했다. (https://www.gjcity.go.kr/portal/saeol/gosi/view.do?notAncmtMgtNo=63819&mId=0202010000, https://www.gjcity.go.kr/portal/saeol/gosi/view.do?notAncmtMgtNo=72972&mId=0202010000)
- 2025-08-27의 신규 공식 고시 메타데이터를 확인했다: 광주시 고시 제2025-333호, "도시관리계획(광주역세권지구 지구단위계획) 결정(경미한 변경) 및 실시계획인가(변경) 고시 [광주역세권지구 근린공원2호]". (https://www.gjcity.go.kr/portal/saeol/gosi/view.do?notAncmtMgtNo=72972&mId=0202010000)
- 선행 공고도 확인했다: 광주시 공고 제2025-2234호(2025-08-04), "광주역세권지구 도시계획시설(근린공원2호) 사업 실시계획인가(변경) 열람공고". (https://www.gjcity.go.kr/portal/saeol/gosi/view.do?notAncmtMgtNo=72972&mId=0202010000)
- 2025-08-27 HWP와 2025-08-04 HWPX에 대한 직접 다운로드 시도는 HTML 오류 페이지로 연결되어, 이번 패스에서는 `files/`에 새 원본 파일을 남기지 못했다.
- 기존 추출 Markdown이 현재까지의 원문 코퍼스로 남아 있다.
