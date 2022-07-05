import { useEffect, useState } from "react";
import PortfolioCategory from "./PortfolioCategory";
import { PortfolioDrawing, PortfolioManga, PortfolioAll } from './PortfolioData'
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [categoryData, setCategoryData] = useState([]);
  const list = [
    {
      id: 'all',
      title: 'All'
    },
    {
      id: 'drawing',
      title: 'My Drawings'
    },
    {
      id: 'manga',
      title: 'List of Mangas that I read'
    },
    
  ];
  useEffect(() => {
    switch (activeCategory) {
      case "all":
        setCategoryData(PortfolioAll);
        break;
        case "drawing":
          setCategoryData(PortfolioDrawing);
          break;
      case "manga":
        setCategoryData(PortfolioManga);
        break;
      default:
        setCategoryData(PortfolioAll)
    }
  }, [activeCategory])
  return (
    <div id="portfolio" className="section dark1">
      <div className="container">
        <div className="section-title">
          <h1>My <span className="color-primary">Hobbies</span></h1>
          <p className="width70">I usually draw and read comics if I have free time since my schedule is every heacted. </p>
        </div>
        <div className="portfolio-category">
          <ul>
            {list.map((item) => (<PortfolioCategory
              title={item.title}
              active={activeCategory === item.id}
              setActiveCategory={setActiveCategory}
              id={item.id} 
              key= {item.id}
            />))}
          </ul>
        </div>
        <div className="portfolio-items">
          {categoryData.map((d, index) => (
            <div className="portfolio-item" key={index}>
              <img src={d.img} alt={d.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;