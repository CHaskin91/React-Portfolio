import "./portfolioList.scss"

export default function PortfolioList({ id, title, URL, active, setSelected }) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} 
    onClick={() => setSelected(id)}
    >
        {title}
        {URL}
    </li>
  );
}
