import React from "react";
import "./TokenEconomyCompound.css";

function TokenEconomyCompound() {
    return (
        <div className="token-economy-compound">
            {/* Page Title */}
            <h1>Token Economy: Compound</h1>

            {/* 1) Introduction / 소개 */}
            <section>
                <h2>1) Introduction / 소개</h2>
                <p>
                    <strong>Compound</strong>는 이더리움 기반의 <em>탈중앙화 금융(DeFi)</em> 프로토콜로,
                    사용자들이 자산을 <strong>예치(Supply)</strong>하여 이자를 얻고,
                    또는 담보를 예치하고 자산을 <strong>대출(Borrow)</strong>받을 수 있게 합니다.
                </p>
                <p>
                    In simple terms, Compound provides an{" "}
                    <strong>open money market for digital assets</strong>, governed by
                    smart contracts and community-driven decisions.
                </p>
            </section>

            {/* 2) Value Proposition / 왜 중요한가? */}
            <section>
                <h2>2) Value Proposition / 왜 중요한가?</h2>
                <ul className="bullet-list">
                    <li>
                        <strong>Passive Yield for Everyone (누구나 이자를 얻는다):</strong>
                        Idle crypto assets generate yield without traditional banking.
                        무관한 제3자나 금융기관 없이도, <em>토큰 예치만으로 수익</em>을 얻을 수 있습니다.
                    </li>
                    <li>
                        <strong>Permissionless Lending (허가 없는 대출):</strong>
                        Anyone with collateral can borrow and repay any time without a fixed term.
                        금융 문턱이 낮아져, 글로벌 유동성이 확대됩니다.
                    </li>
                    <li>
                        <strong>Community-Driven Governance (커뮤니티 주도 거버넌스):</strong>
                        <strong>COMP</strong>로 의결권을 행사해 프로토콜 이자율 모델, 리저브 정책 등을 직접 결정할 수 있습니다.
                    </li>
                    <li>
                        <strong>Composability in DeFi (DeFi 호환성):</strong>
                        cTokens &amp; COMP integrate easily into other protocols (yield farming, aggregators, etc.).
                        “<em>DeFi 레고</em>”처럼 여러 프로젝트와 결합해 금융 생태계를 더욱 확장합니다.
                    </li>
                </ul>
            </section>

            {/* 3) The Two-Token Model / 두 가지 주요 토큰 */}
            <section>
                <h2>3) The Two-Token Model / 두 가지 주요 토큰</h2>

                {/* (A) cTokens */}
                <h3>(A) cTokens</h3>
                <ul className="bullet-list">
                    <li>
                        <strong>개념 (Concept):</strong> 예: <code>cDAI</code>, <code>cETH</code> 등.
                        When you supply an asset (like DAI) to Compound, you get <code>cDAI</code> in return.
                        This cToken tracks your share in the liquidity pool and automatically accrues interest.
                    </li>
                    <li>
                        <strong>원리 (Mechanism):</strong> cToken은{" "}
                        <em>교환 비율(Exchange Rate)</em>을 통해 이자를 반영합니다. 시간이 지날수록,
                        cToken 1개당 받을 수 있는 <strong>Underlying 자산</strong>
                        (DAI, ETH 등)의 양이 점차 증가합니다.
                    </li>
                    <li>
                        <strong>요약 (Summary):</strong> Essentially, cTokens represent your
                        “deposit receipts” that keep growing in value as interest accumulates.
                    </li>
                </ul>

                {/* (B) COMP */}
                <h3>(B) COMP</h3>
                <ul className="bullet-list">
                    <li>
                        <strong>개념 (Concept):</strong> Compound의 <em>거버넌스 토큰</em>, 즉 프로토콜
                        운영 방향에 대한 <strong>의결권</strong>을 부여합니다.
                        Both suppliers and borrowers can earn COMP rewards, fostering protocol participation.
                    </li>
                    <li>
                        <strong>가치 (Value):</strong> Holding COMP allows you to propose/vote on changes
                        (e.g., interest rate models, collateral factors).
                        If the protocol expands and governance introduces revenue-sharing or buyback mechanisms,
                        COMP could potentially appreciate in the market.
                    </li>
                    <li>
                        <strong>요약 (Summary):</strong> COMP is about <em>governance power</em>, shaping
                        the future of Compound’s economics and growth.
                    </li>
                </ul>
            </section>

            {/* 4) Infographic / 구조도 (새 ASCII 아트) */}
            <section>
                <h2>4) Infographic / 구조도</h2>
                <pre className="infographic-box">
                    {`
┌────────────────────────────────────────────────────────────────────┐
│                     COMPOUND PROTOCOL (컴파운드)                  │
│                 DeFi Lending & Borrowing Platform                │
├────────────────────────────────────────────────────────────────────┤
│ 1. SUPPLIERS (예치자)                                             │
│   - Supply assets (DAI, ETH 등)                                   │
│   - Receive cTokens (cDAI, cETH...)                               │
│   - 자동 이자 반영 (interest accrual via exchange rate)           │
├────────────────────────────────────────────────────────────────────┤
│ 2. BORROWERS (대출자)                                             │
│   - Lock collateral (담보 예치)                                   │
│   - Borrow assets from the pool                                   │
│   - Pay interest to the protocol                                  │
├────────────────────────────────────────────────────────────────────┤
│ 3. cTOKEN (예치 지분 토큰)                                            │
│   - Grow in value as protocol earns interest                       │
│   - Redeem for underlying asset + interest later                   │
├────────────────────────────────────────────────────────────────────┤
│ 4. COMP (거버넌스 토큰)                                           │
│   - Vote on interest rate models, collateral factors, etc.        │
│   - Earned by suppliers & borrowers (incentive)                   │
│   - Potential future revenue share or buybacks                    │
└────────────────────────────────────────────────────────────────────┘
`}
                </pre>
            </section>
        </div>
    );
}

export default TokenEconomyCompound;