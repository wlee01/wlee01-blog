import React from "react";
import "./EthereumVsSolana.css";

const EthereumVsSolana: React.FC = () => {
    return (
        <div className="page-container eth-vs-solana-background">

            {/* -----------------------------
          (1) Ethereum vs Solana 기본 비교
       ----------------------------- */}
            <section className="eth-vs-solana-section">
                <h1 className="eth-vs-solana-title">🔷 Ethereum vs Solana 🔶</h1>
                <p className="intro-text">
                    Ethereum과 Solana는 모두 Proof of Stake (PoS)를 사용하고, 스마트 컨트랙트를 지원합니다.
                    하지만 블록체인 <strong>아키텍처</strong>의 차이가 각각의 강점과 트레이드오프를 결정합니다.
                </p>

                <h2 className="section-header">Technical Architecture</h2>
                <h3 className="sub-header">Solana’s Monolithic Design</h3>
                <p>
                    Solana는 <strong>싱글 레이어(single-layer)</strong> 블록체인으로, 합의(Consensus), 실행(Execution),
                    데이터 가용성(Data Availability)이 하나로 밀접하게 통합되어 있습니다.
                    덕분에 <strong>높은 처리속도</strong>와 <strong>저렴한 수수료</strong>를 제공하지만,
                    상대적으로 <strong>중앙화 위험</strong>이 커질 수 있습니다.
                </p>

                <h4 className="highlight-header">Why Is Solana Faster?</h4>
                <p>
                    Solana의 <strong>밀접하게 통합된 아키텍처</strong> 덕분에 노드 간 통신 효율이 높아지고,
                    지연 시간이 줄어듭니다.
                </p>

                <h4 className="highlight-header">Parallel Execution with Sealevel</h4>
                <p>
                    Ethereum이 <strong>순차 실행</strong>(sequential)인 반면, Solana의 <strong>Sealevel 엔진</strong>은
                    동일한 계정 상태를 수정하지 않는 트랜잭션을 <strong>병렬</strong>로 처리할 수 있습니다.
                </p>

                <div className="example-box">
                    <p><strong>예시:</strong></p>
                    <ul>
                        <li><strong>Ethereum:</strong> 스왑(거래)을 순차적으로 실행</li>
                        <li><strong>Solana:</strong> 여러 스왑을 동시에 병렬 실행, 훨씬 빠른 처리 가능</li>
                    </ul>
                </div>

                <h4 className="highlight-header">Optimized Consensus with Proof of History (PoH)</h4>
                <p>
                    Solana는 <strong>Proof of History (PoH)</strong>를 통해 트랜잭션에 사전 타임스탬프를 부여합니다.
                </p>
                <ul>
                    <li><strong>Ethereum PoS:</strong> 여러 단계의 합의를 거침</li>
                    <li><strong>Solana PoH + PoS:</strong> 트랜잭션이 미리 정렬되어 지연 감소</li>
                </ul>
                <div className="highlight-box">더 빠른 파이널리티, 더 낮은 지연 시간</div>

                <h3 className="sub-header">Ethereum’s Modular Approach</h3>
                <p>
                    Ethereum은 <strong>모듈형 블록체인</strong>으로, 실행(Execution)을
                    <strong>Optimism</strong>, <strong>Arbitrum</strong> 같은 <strong>레이어 2 솔루션</strong>에서 처리해
                    <strong>확장성</strong>과 <strong>탈중앙성</strong>을 높이는 전략을 채택합니다.
                </p>

                <h4 className="highlight-header">Layer-2 Rollups Handle Execution</h4>
                <p>
                    Ethereum 메인넷에서 직접 모든 트랜잭션을 처리하지 않고,
                    롤업(Rollup)이 오프체인에서 트랜잭션을 모은 뒤 일괄 검증하는 방식을 택합니다.
                </p>

                <h4 className="highlight-header">Data Availability Layers</h4>
                <p>
                    Ethereum은 <strong>Danksharding</strong>을 향해 진화 중이며,
                    <strong>Celestia</strong> 등의 솔루션이 데이터를 보관해 메인넷 혼잡과 수수료를 낮추는 역할을 합니다.
                </p>
                <div className="highlight-box">
                    Ethereum은 <strong>보안과 탈중앙화</strong>를 우선시하고,
                    확장은 <strong>레이어 2</strong> 솔루션을 통해 달성합니다.
                </div>

                <h2 className="section-header">Key Differences at a Glance</h2>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Solana (Monolithic)</th>
                            <th>Ethereum (Modular)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Transaction Speed</td>
                            <td>High (~4,000 TPS)</td>
                            <td>Slower on L1, scales via L2s</td>
                        </tr>
                        <tr>
                            <td>Execution Model</td>
                            <td>Parallel (Sealevel)</td>
                            <td>Sequential (EVM)</td>
                        </tr>
                        <tr>
                            <td>Consensus</td>
                            <td>Proof of History + PoS</td>
                            <td>PoS with validator agreement</td>
                        </tr>
                        <tr>
                            <td>Scaling Strategy</td>
                            <td>Hardware upgrades</td>
                            <td>Layer-2 rollups</td>
                        </tr>
                        <tr>
                            <td>Decentralization</td>
                            <td>Lower</td>
                            <td>Higher</td>
                        </tr>
                        <tr>
                            <td>Flexibility</td>
                            <td>Less modular, highly efficient</td>
                            <td>Highly modular, more adaptable</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="section-header">Real-World Applications</h2>
                <h3>Ethereum: The DeFi & SocialFi Powerhouse</h3>
                <ul>
                    <li>Lido & EigenLayer – 리퀴드 스테이킹 & 리스테이킹</li>
                    <li>AAVE & Pendle – 대출 & 이자 토큰화</li>
                    <li>Uniswap – 탈중앙화 거래소(DEX)</li>
                    <li>Friend.tech & Farcaster – 탈중앙화 SNS</li>
                </ul>

                <h3>Solana: Speed & Retail Innovation</h3>
                <ul>
                    <li>Solana Mobile – 크립토 스마트폰</li>
                    <li>Jupiter – 솔라나 대표 DEX 애그리게이터</li>
                    <li>Pump.fun – 솔라나 대표 밈코인 런치패드</li>
                </ul>

                <h2 className="section-header">Which Blockchain Comes Out on Top?</h2>
                <p className="closing-remarks">
                    Ethereum은 <strong>보안과 탈중앙성</strong>이 강점이며,
                    Solana는 <strong>빠른 처리 속도와 효율성</strong>을 자랑합니다.
                    <strong>DeFi & 인프라</strong> 위주라면 Ethereum이,
                    <strong>소비자 친화적</strong> 생태계를 원한다면 Solana가 매력적일 수 있습니다.
                </p>
            </section>

            {/* -----------------------------
          (2) Top DApp Revenue in 2024
       ----------------------------- */}
            <section className="top-dapp-revenue-section">
                <header className="comparison-header">
                    <h1 className="title-gradient">🔷 Top Revenue-Generating dApps in 2024 🔶</h1>
                    <p className="lead-text">
                        A look at the leading decentralized applications (dApps) on Ethereum and Solana
                        that dominated revenue generation in 2024.
                    </p>
                </header>

                <div className="revenue-sub-section">
                    <h2 className="revenue-section-title">Ethereum: Uniswap Leads the Pack</h2>
                    <h3>Overview</h3>
                    <p>
                        Uniswap, the leading decentralized exchange (DEX), topped Ethereum's
                        dApp revenue charts in 2024. Built on Ethereum, Uniswap allows users
                        to trade cryptocurrencies using an AMM model, enabling liquidity providers
                        to earn fees by depositing assets into liquidity pools.
                    </p>

                    <h3>Key Metrics</h3>
                    <ul>
                        <li><strong>Total Revenue:</strong> Contributed significantly to Ethereum’s $2.48 billion fee revenue.</li>
                        <li><strong>Total Value Locked (TVL):</strong> $3.3 billion by mid-2024.</li>
                        <li><strong>Layer-2 Expansion:</strong> Uniswap leveraged Arbitrum and Optimism to reduce transaction costs.</li>
                    </ul>

                    <h3>Why Uniswap Was Successful</h3>
                    <ul>
                        <li><strong>High Trading Volumes:</strong> Billions in daily trading volume.</li>
                        <li><strong>Fee Structure:</strong> LPs earn a share of fees ranging from 0.05% to 1%.</li>
                        <li><strong>DeFi Dominance:</strong> Central to Ethereum’s DeFi ecosystem.</li>
                    </ul>
                </div>

                <div className="revenue-sub-section">
                    <h2 className="revenue-section-title">Solana: Pump.fun Takes the Lead</h2>
                    <h3>Overview</h3>
                    <p>
                        Pump.fun, a meme coin launchpad, emerged as Solana’s top revenue-generating dApp in 2024.
                        It capitalized on the explosive growth of meme coin activity, becoming the first Solana dApp
                        to surpass $100 million in monthly revenue.
                    </p>

                    <h3>Key Metrics</h3>
                    <ul>
                        <li><strong>Total Revenue:</strong> $509 million in 2024.</li>
                        <li><strong>November Revenue:</strong> $106 million, setting a record for Solana-based dApps.</li>
                        <li><strong>Meme Coin Sector Dominance:</strong> 83.7% of Solana’s total dApp revenue.</li>
                    </ul>

                    <h3>Why Pump.fun Was Successful</h3>
                    <ul>
                        <li><strong>Meme Coin Mania:</strong> Riding the wave of speculative meme coins.</li>
                        <li><strong>User Engagement:</strong> Viral features and gamified token launches.</li>
                        <li><strong>Scalability:</strong> Solana’s low fees and high throughput.</li>
                    </ul>

                    <h3>Challenges</h3>
                    <p>
                        In late November, Pump.fun faced criticism over inappropriate content in its livestreaming feature,
                        leading to a suspension of livestreaming. Weekly revenue dropped by 66%,
                        but the platform remained at the top of Solana’s dApp rankings.
                    </p>
                </div>

                <div className="revenue-comparison-section">
                    <h2 className="revenue-section-title">Ethereum vs Solana: Revenue Comparison</h2>
                    <table className="revenue-comparison-table">
                        <thead>
                            <tr>
                                <th>DApp</th>
                                <th>Total Revenue (2024)</th>
                                <th>Main Sector</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Uniswap (Ethereum)</strong></td>
                                <td>$2.48B (network-wide)</td>
                                <td>Decentralized Exchange (DEX)</td>
                            </tr>
                            <tr>
                                <td><strong>Pump.fun (Solana)</strong></td>
                                <td>$509M</td>
                                <td>Meme Coins</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="summary-text">
                        While Uniswap dominated Ethereum with its DeFi-driven trading volumes,
                        Pump.fun showcased Solana’s ability to capitalize on niche sectors like meme coins.
                        Both platforms highlight the evolving dynamics of blockchain ecosystems in 2024.
                    </p>
                </div>
            </section>

            {/* -----------------------------
          (3) Uniswap vs Pump.fun 자산 비교
       ----------------------------- */}
            <section className="trading-assets-comparison-section">
                <h2 className="section-header">
                    Comparison: Trading Assets on Uniswap (Ethereum) vs. Pump.fun (Solana)
                </h2>

                {/* 1) Nature of Assets Traded on Uniswap */}
                <h3 className="sub-header">1. Nature of Assets Traded on Uniswap</h3>
                <p>
                    Uniswap, Ethereum’s leading DEX,는 DeFi의 핵심을 이루는 기관급(“institutional-grade”) 자산이
                    대다수를 이룹니다. 대표적인 거래 쌍은 <strong>WETH/USDC</strong>, <strong>USDT/USDC</strong>,
                    <strong>WETH/DAI</strong>, <strong>WBTC/WETH</strong> 등입니다.
                </p>

                <h4 className="highlight-header">Key Asset Pairs and Their Popularity</h4>
                <ul>
                    <li>
                        <strong>WETH/USDC</strong>: ETH(랩핑)과 USD Coin 간 페어
                        <ul>
                            <li><em>Liquidity Backbone:</em> WETH는 Ethereum의 가장 유동성이 풍부한 자산, USDC는 신뢰도가 높은 규제 준수 스테이블코인</li>
                            <li><em>DeFi Utility:</em> Lending, borrowing 등에 핵심 페어로 활용</li>
                            <li><em>Market Stability:</em> ETH 변동성을 USDC로 일부 헤징 가능</li>
                        </ul>
                    </li>
                    <li>
                        <strong>USDT/USDC</strong>: 스테이블코인 간 거래 쌍
                        <ul>
                            <li><em>Arbitrage Opportunities:</em> 두 스테이블코인 간 미세한 가격 차이를 이용</li>
                            <li><em>Global Reach:</em> USDT는 국제 시장, USDC는 미국 규제 시장 중심</li>
                        </ul>
                    </li>
                    <li>
                        <strong>WETH/DAI</strong>: 이더리움 랩핑 토큰과 탈중앙 스테이블코인
                        <ul>
                            <li><em>Decentralized Ethos:</em> DAI는 과잉 담보(crypto-backed) 방식</li>
                            <li><em>DeFi Integration:</em> MakerDAO, Compound 등과 밀접</li>
                        </ul>
                    </li>
                    <li>
                        <strong>WBTC/WETH</strong>: Wrapped Bitcoin과 Wrapped Ethereum
                        <ul>
                            <li><em>Interoperability:</em> BTC 유동성을 Ethereum DeFi에 끌어옴</li>
                            <li><em>Institutional Use:</em> BTC 보유 기관이 ETH 기반 금융상품 접근 용이</li>
                        </ul>
                    </li>
                </ul>

                {/* 2) Nature of Assets Traded on Pump.fun */}
                <h3 className="sub-header">2. Nature of Assets Traded on Pump.fun</h3>
                <p>
                    Pump.fun은 Solana의 밈코인 런치패드로, 2024년 Solana 전체 DEX 거래량의 52%를 점유했습니다.
                    TRUMP 토큰을 비롯한 각종 밈코인과 바이럴 자산이 거래의 대부분을 차지합니다.
                </p>
                <h4 className="highlight-header">Characteristics of Pump.fun Trading Activity</h4>
                <ul>
                    <li>
                        <strong>Speculative Focus:</strong>
                        밈코인이 Solana 전체 dApp 매출의 83% 이상 차지. 주로 소셜 미디어 트렌드가 가격을 좌우.
                    </li>
                    <li>
                        <strong>Retail Dominance:</strong>
                        기관보다는 개인 투자자가 주도. 단기 큰 변동성을 노리는 고위험/고수익 추구.
                    </li>
                </ul>

                {/* Key Differences Table */}
                <h3 className="sub-header">Key Differences Between Uniswap and Pump.fun</h3>
                <table className="assets-comparison-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Uniswap (Ethereum)</th>
                            <th>Pump.fun (Solana)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Top-Traded Assets</td>
                            <td>WETH/USDC, USDT/USDC, WBTC/WETH</td>
                            <td>Meme coins (e.g. TRUMP derivatives)</td>
                        </tr>
                        <tr>
                            <td>Trading Volume Share</td>
                            <td>Mostly institutional-grade (~70%)</td>
                            <td>Meme coins ~52% of Solana DEX volume</td>
                        </tr>
                        <tr>
                            <td>User Base</td>
                            <td>Institutional + Retail</td>
                            <td>Primarily Retail seeking speculative gains</td>
                        </tr>
                        <tr>
                            <td>Value Proposition</td>
                            <td>Liquidity for DeFi; institutional-grade</td>
                            <td>Viral token launches; high-risk meme coins</td>
                        </tr>
                        <tr>
                            <td>Revenue Model</td>
                            <td>Transaction fees from DeFi pairs</td>
                            <td>Launchpad + transaction fees from meme coins</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className="sub-header">
                    Why Institutions Favor Uniswap's Assets Over Pump.fun's Speculative Tokens
                </h3>
                <ul>
                    <li>
                        <strong>Regulatory Compliance & Risk Management:</strong>
                        USDC, WBTC, ETH 등은 신뢰도 높은 기관들(Circle, BitGo)과 협업하며
                        규제 위험이 비교적 낮습니다. 반면, 밈코인은 규제 불확실성과 평판 리스크가 큼.
                    </li>
                    <li>
                        <strong>Liquidity Depth:</strong>
                        WETH/USDC 등은 대규모 거래에도 슬리피지가 적은 심층 유동성을 지님.
                        밈코인은 얕은 유동성으로 인해 가격 변동이 크고 대량 거래가 어려울 수 있음.
                    </li>
                    <li>
                        <strong>Sustainability:</strong>
                        Uniswap은 안정적인 DeFi 페어 중심으로 꾸준한 거래량을 유지.
                        Pump.fun의 밈코인 붐은 단기간에 급등락하며 장기 지속성은 미지수.
                    </li>
                    <li>
                        <strong>Reputation Management:</strong>
                        기관은 대규모 자본 운용 시 신뢰성과 안정성을 중시합니다.
                        밈코인 투자 실패나 ‘러그 풀(rug pull)’은 기관의 명성에 큰 타격을 줄 수 있음.
                    </li>
                </ul>

                <h3 className="sub-header">Conclusion</h3>
                <p>
                    Uniswap은 Ethereum의 DeFi 기반을 뒷받침하는 안정적이고 신뢰도가 높은 자산 거래를 제공하며,
                    Pump.fun은 Solana의 빠르고 저렴한 특성과 밈코인 투자 열기를 결합해 짧은 기간 내
                    높은 수익을 창출했습니다.
                </p>
                <p>
                    하지만, <strong>기관급 자본</strong>은 규제 준수, 유동성,
                    그리고 지속 가능성을 중시하기 때문에 DeFi 인프라가 성숙한 Ethereum 쪽을
                    선호하는 경향이 뚜렷합니다. Solana의 밈코인 열풍은 소매 투자자를 빠르게 끌어들였지만,
                    장기적인 안정성에는 의문이 제기됩니다.
                </p>
            </section>
        </div>
    );
};

export default EthereumVsSolana;