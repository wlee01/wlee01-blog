# wlee01-blog
익명성 = 인간의 본질적 자유
블록 + 체인이란?
  - 탈중앙화되고 암호화된 데이터 + 소수가 통제/변조 불가능한 네트워크
  - 경제 가치를 이전할 수 있는 네트워크

초기 블록체인, 해시에 관하여 
 - 해시 함수의 목적 = 데이터의 무결성
 - 블록체인은 데이터 무결성 수준을 높히는데 채굴이라는 전산적 노동에 자유시장 보상체계를 도입한 네트워크 메커니즘 

블록체인의 기본 구조 
  - 상위: 블록 헤더, 버전, 머클루트, 난이도, 타임, 논스, 이전 블록해시
  - 바디: 거래내역 (1-N)
블록체인 구조로 인한 특이점, 장점
   - 머클루트: 머클루트는 블록에 포함된 모든 거래기록의 해시값을 결합하여 생성된 해시 값이기 때문에, 블록에 포함된 1개의 거래 변경은 머클루트 값을 변경하기 때문에 데이터 무결성에 일조한다
   - 블록헤더: 각각 블록의 연결성에 기여
   - 난이도: 난이도 조정은 채굴자간의 경쟁력 / 채굴 기여 대입 보상을 통해 네트워크 보안을 강화
   - 논스: 정답을 맞춘 채굴자를 검증하는 역할 -> 이로 인해 채굴에 공정성을 기여함
   - 버전: 모든 참여자가 동기화되어 있는 상태를 유지 -> 동시성 강화
   - 이전 블록해시: 블록의 참/거짓 판별 가능
   - 타임: 시간을 부여함에 블록 참/거짓 판별 수월해짐 -> 기록 = 공정함 유지

UTXO
   - 비트코인 자산 표시 개념 -> 일반적인 +- 밸런스 개념과 다름 -> 하나의 수량 증표 개념
   - 얼만큼 남았느냐를 강조 

분산원장
  - 탈중앙화 노드들이 블록 무결성 검증 -> 보상

분산원장 운영 네트워크 형태 
  - POW 작업증명 방식: 총합 연산력 대비 작업증명에 투입되는 노드의 연산력에 대비 블록 채굴 확률 증가 -> 이따른 보상 확률 증가
  - POW 지분증명 방식: 총합 지분 대비 지분증명에 투입되는 노드의 지분력에 대비 블록 채굴 확률 증가 -> 이따른 보상 확률 증가
  - DPOS 위임지분증명 방식: 지분을 위임받은 자를 대표로 칭함. 대표들은 차례대로 블록 검증/생성 -> 이따른 균등한 또는 지분에 비례한 보상

채굴이란
  1. 거래자 사이에 거래가 발생한다
  2. 거래는 블록체인 네트워크에 노드를 통해 전파된다
  3. 거래는 "블록"의 개념으로 존재하며 모든 거래 블록은 메모리 풀으로 이동한다
  4. 풀노드를 운영하는 채굴자들은 메모리 풀에 존재하는 거래블록/데이터를 수집 후, SHA 256 해싱 과정을 거치고 완전한 블록으로 인정받기 위해 필수적인 구조의 구성 데이터를 조립한다
      블록의 기본 구조 
    -   상위: 블록 헤더, 버전, 머클루트, 난이도, 타임, 논스, 이전 블록해시
    -   바디: 거래내역 (1-N)
  5. 완전한 블록으로 조립되면 채굴자는 블록 채굴 사건을 네트워크에 전파한다
  6. 참여 노드들은 블록 헤더의 해시 값 및 존속 거래 내역들을 검증한다
  7. 검증 후 블록 무결성의 입증되면 블록 채굴자는 네트워크에서 코인베이스 거래를 통해 채굴 보상을 받는다

이더리움 
  - 완전 튜링 프로그래밍 가능한 네트워크
  - 스마트 컨트랙 기능 탑재 -> 누구나 조건을 실행하고 구동 -> 자율적인 프로그램 -> 조건에 무조건적으로 부합해야만 실행 가능
  - 비트코인과 대조적으로 확장 가능한 설계

  - EOA: Externally Owned Account -> 개인이 소유한 계정 -> 비공개 키로 제어 
  - CA: Contract Account -> 특정 코드가 탑재

EVM 
  - 개발자가 작성한 코드와 컴퓨터 사이에 이더리움 스마트 계약을 이해, 처리/실행 가능한 컴퓨터 환경
  - 제 3의 신뢰기간이 필요없는 100% 컴퓨터 로직으로 운영

웹이란? 
 - 인터넷이란 물리적인 네트워크 인프라 위에 동작하는 정보 시스템
 - 인터넷 = 도로, 웹 = 자동차

www의 개념 
 - 문서와 문서를 연결하는 링크 구조

웹의 구성요소 
 - html = 뼈대 -> 구조와 내용을 작성
 - http = 클라이언트 / 서버 통신 규칙
 - URL = 웹 리소스 식별 주소 체계

서버: 데이터 베이스 역할

HTML = 집짓기 
CSS = 스타일 
Javascript = 동적 역할 

텍스트와 구조 태그 
  <h> = header 
  <br> = 한 줄 띄어쓰기 
  <li> = 리스트 

주요 시맨틱 태그:
<header>: 페이지 또는 섹션의 헤더
<nav>: 내비게이션 메뉴
<main>: 주요 콘텐츠 영역
<article>: 독립적인 콘텐츠
<section>: 관련된 콘텐츠 그룹
<footer>: 페이지 또는 섹션의 푸터

02/14/2025 
JavaScript 기본 함수 / 구조에 대해 배움 
어려운 감이 있어서, 천천히 진행할 예정 
주말에 보강으로 자바스크립트를 배우겠음 

02/21/2025
굉장한 하루였어 
조건문과 반복문을 써서 Welcome to Bitcoin 이라는 Sign up 페이지를 만들었어 
자바 스크립트가 조금씩 익숙해지고있어 
다음 주에 계속 

02/24/2024
Today was a good day 

JavaScript에는 기본적으로 내장된 고차 함수가 있다. 그중에서 배열 메서드들 중 일부가 대표적인 고차 함수에 해당한다. 이번 콘텐츠에서는, 배열 메서드 중 하나인 filter를 학습했다. 

배열의 filter 메서드는, 모든 배열의 요소 중에서 특정 조건을 만족하는 요소를 걸러내는 메서드입니다. 예를 들어 number 타입을 요소로 갖는 배열에서 짝수만을 걸러내거나, 18 보다 작은 수만을 걸러낸다. string 타입을 요소로 갖는 배열에서, 길이가 10 이하인 문자열만 걸러내거나, 'korea' 같은 특정 문자열만 걸러낼 수도 있다.

// 아래 코드에서 '짝수'와 '길이 5 이하'는 문법 오류(syntax error)에 해당한다. 
// 의미만 이해해도 충분합니다.
let arr = [1, 2, 3, 4];
let output = arr.filter(짝수);
console.log(output); // ->> [2, 4]

arr = ['hello', 'rocket', 'boost', 'happy', 'hacking'];
output = arr.filter(길이 5 이하)
console.log(output); // ->> ['hello', 'boost', 'happy']

GG, LFG, Good game.


02/25/2024 
Had a good focus 
- Bee, Grub, Honey Bee 등 기타 파일을 실행함을 통해

1. 적용된 함수, 값을 불러내는 것 (extends)에 대해 배움





