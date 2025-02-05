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
