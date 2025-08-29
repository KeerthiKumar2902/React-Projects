import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResult";

export const BASE_URl = "http://localhost:9000"

const App = () => {
  const [data, setData] =useState(null);
  const [loading, setLoading] =useState(false);
  const [error, setError] =useState(null);
  const [filteredData, setFilteredData] =useState(null);
  const [selectedBtn ,setSelectedBtn] =useState('all');

  useEffect( ()=>{
      const fetchFoodData = async () =>{
      setLoading(true);
      try {
          const response =await fetch(BASE_URl);
          const json= await response.json();
          setData(json);
          setFilteredData(json);
          setLoading(false)
      } 
      catch (error) {
          setError("Unable to fetch Data")
      }

    };

    fetchFoodData();

  },[]);

  const searchFood =(e)=>{
    const searchValue = e.target.value;
    console.log(searchValue);

    if(searchValue===''){
      setFilteredData(null);
    }

    const filter = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filter);
  };

  const filterFood = (type) => {

    if(type ==='all'){
      setFilteredData(data);
      setSelectedBtn('all');
      return;
    }

    const filter = data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setSelectedBtn(type);

  }

  console.log(data)


  if(error) return <div> {error}</div>;

  if(loading) return <div> loading.....</div>;
  


  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button $active={selectedBtn === 'all'} onClick={() => filterFood('all')}>All</Button>
          <Button $active={selectedBtn === 'breakfast'} onClick={() => filterFood('breakfast')}>Breakfast</Button>
          <Button $active={selectedBtn === 'lunch'} onClick={() => filterFood('lunch')}>Lunch</Button>
          <Button $active={selectedBtn === 'dinner'} onClick={() => filterFood('dinner')}>Dinner</Button>
        </FilterContainer>

      </Container>
      <SearchResult data={filteredData}/>
    </>
  );
};

export default App;

export const Container=styled.div`
  max-width: 1200px;
  margin: 0 auto;

`;

const TopContainer=styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size:  16px;
      padding: 0 10px;
    }
  }
   @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 12px;

    .search {
      width: 100%; /* make search bar full width */
    }

    .search input {
      width: 100%;
    }
  }
`;

const FilterContainer=styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  color: white;
  padding-bottom: 40px;

  @media (max-width: 300px) {
    flex-direction: column;
    align-items: center;
    gap: 16px; /* extra spacing when stacked */
  }
`;

export const Button = styled.button`
  background:  ${(props) => (props.$active ? "#e8c70c" : "red")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #e8c70c;
  }
`;

