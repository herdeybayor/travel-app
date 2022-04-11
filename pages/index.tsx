import type { NextPage } from 'next'
import Head from 'next/head'
import { BsGridFill } from 'react-icons/bs'
import Card from '../components/Card'
import Header from '../components/Header'
import TravelType from '../components/TravelType'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll scrollbar-thin scrollbar-track-orange-100 scrollbar-thumb-orange-600">
      <Head>
        <title>TooTravel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col-reverse lg:grid lg:h-screen lg:grid-cols-10">
        {/* Left side --- Slider */}
        <div className="col-span-6 flex flex-col space-y-8 rounded-t-[2.5rem] bg-[url('https://images.pexels.com/photos/5431372/pexels-photo-5431372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center p-10 text-white lg:justify-between lg:space-y-0 lg:rounded-l-none lg:rounded-r-[2.5rem]">
          {/* Logo */}
          <h1 className="text-2xl font-medium">TooTravel</h1>

          {/* Centered Text */}
          <div className="space-y-8 lg:ml-10 lg:w-9/12">
            <h1 className="text-5xl font-bold">
              The most beautiful places in the world!
            </h1>
            <p className="text-lg">
              Plan your vacation on the most beautiful places in the world
            </p>
            <button className="rounded-2xl bg-orange-500 px-16 py-4 font-bold transition hover:scale-105 hover:bg-orange-600">
              Get Started
            </button>
          </div>

          {/* Slider Control */}
          <div className="mx-auto flex items-center space-x-4">
            <span>01</span>
            <div className="flex items-center space-x-1">
              <span className="control control--active"></span>
              <span className="control"></span>
              <span className="control"></span>
            </div>
            <span>03</span>
          </div>
        </div>

        {/* Right side */}
        <div className="col-span-4 flex flex-col justify-between p-10">
          {/* Header */}
          <Header />

          {/* Discover */}
          <div className="mt-10 flex flex-col space-y-5 lg:mt-0">
            <h1 className="text-4xl font-medium">Discover</h1>
            <div className="flex space-x-10">
              <p className="discover__link discover__link--active">Popular</p>
              <p className="discover__link">Adventure</p>
              <p className="discover__link">Tour</p>
            </div>
            <div className="flex overflow-x-scroll pb-4 scrollbar-thin scrollbar-track-orange-100 scrollbar-thumb-orange-600">
              <div className="flex space-x-5">
                <Card
                  imgSrc="https://images.pexels.com/photos/9683356/pexels-photo-9683356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  country="Alaska"
                  numberOfPlaces={52}
                  rating="4.8"
                />
                <Card
                  imgSrc="https://images.pexels.com/photos/953182/pexels-photo-953182.jpeg"
                  country="Iceland"
                  numberOfPlaces={23}
                  rating="5.0"
                />
                <Card
                  imgSrc="https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  country="New York"
                  numberOfPlaces={46}
                  rating="4.8"
                />
                <Card
                  imgSrc="https://images.unsplash.com/photo-1572816225927-d08fb138f2b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  country="Nigeria"
                  numberOfPlaces={72}
                  rating="4.8"
                />
                <Card
                  imgSrc="https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                  country="Thailand"
                  numberOfPlaces={22}
                  rating="4.9"
                />
              </div>
            </div>
          </div>

          {/* Types of Travel */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-4xl font-medium">Types of Travel</h1>
            <div className="flex overflow-x-scroll p-4 scrollbar-thin scrollbar-track-orange-100 scrollbar-thumb-orange-600">
              <div className="flex space-x-5">
                <TravelType emoji="🛫" type="All" active />
                <TravelType emoji="🙍🏼‍♂️" type="Solo" />
                <TravelType emoji="⭐" type="Luxury" />
                <TravelType emoji="🦁" type="Safari" />
                <TravelType emoji="🍔" type="Food" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
