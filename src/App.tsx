import Navbar from './components/navbar'
import Footer from './components/footer'
import Mask from './components/mask'
import Header from './components/header'
import Gallery from './components/gallery'
// import Testimonial from './components/testimonial'
// import Whyus from './components/whyus'
import Contact from './components/contact'
// import Pricing from './components/pricing'

function App() {
	return (
		<>
			<Mask />
			<Navbar />
			<main className='flex-1'>
				<div className='container relative'>
					<Header />
					<Gallery />
					{/* <Pricing /> */}
					{/* <Testimonial />
					<Whyus /> */}
					<Contact />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
