import React, {Fragment, useContext, useEffect} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from '../lib/api'
import AuthContext from '../context/AuthContext';
import Content from '../components/layouts/Content';
import Sidebar from '../components/layouts/Sidebar';
import Main from '../components/layouts/Main';


const Home = ({users}) => {
  const {name,setName,token} = useContext(AuthContext);
  console.log(token);

  // console.log(users.data);

  // axios.post("user/login",{
  //   email: "ibrahim@gmail.com",
  //   password: "ibrahim21"
  // }).then(function(response){
  //   console.log(response);
  // })
  // .catch(function(error){
  //   console.log(error);
  // });


  return (
    <Fragment>
      <Head>
        <title>Plagiarism</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/*<div className="flex relative justify-center item-center">
        <button className="text-primary-400 p-4 rounded-full font-poppins font-medium" onClick={(e) => setName('pk')}>Login</button>
      </div> */}

      <Main>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla repudiandae, expedita, magnam quaerat tempora cupiditate dolor recusandae quisquam cumque illum commodi perspiciatis modi officia dolorem excepturi nobis porro odio.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla repudiandae, expedita, magnam quaerat tempora cupiditate dolor recusandae quisquam cumque illum commodi perspiciatis modi officia dolorem excepturi nobis porro odio.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla repudiandae, expedita, magnam quaerat tempora cupiditate dolor recusandae quisquam cumque illum commodi perspiciatis modi officia dolorem excepturi nobis porro odio.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla repudiandae, expedita, magnam quaerat tempora cupiditate dolor recusandae quisquam cumque illum commodi perspiciatis modi officia dolorem excepturi nobis porro odio.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla repudiandae, expedita, magnam quaerat tempora cupiditate dolor recusandae quisquam cumque illum commodi perspiciatis modi officia dolorem excepturi nobis porro odio.</p>
      </Main>
    </Fragment>
  )
}


export async function getStaticProps() {
  const users = await axios.get("user/notifications",{
    headers: {
      'Authorization': 'Bearer fJrhE4QvTf3OaTRH8d2sGSVB7bEYVdwFIXjrEnYiAP347YpZiQxckZEHZLPR'
    }
  }).then(function(response){
    // return {
    //   headers: response?.headers,
    //   data: response?.data,
    //   status: response?.status
    // };
    return response?.data;
  })
  .catch(function(error){
    // return JSON.parse(JSON.stringify(error))
    return {
      success: false,
    };
  });

  // const user =[];
  return {
    props: {
      users,
    },
  }
}

export default Home;

