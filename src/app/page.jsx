"use client"
import React, {useState, useEffect} from 'react'
import FormInput from './components/FormInput'
import Card from './components/Card'
import PageLoader from 'next/dist/client/page-loader';
function Page() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://api.github.com/users/faarid26`);
        const initialData = await res.json();
        setData(initialData);
      } catch (error) {
        console.error('Xeta:', error);
      }
    }

    fetchData();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://api.github.com/users/${inputValue}`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error('Xeta:', error);
    }
    setInputValue('');
  };
  return (
    <main>
      <FormInput handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} data={data}/>
      <Card data={data}/>
    </main>
  )
}

export default Page