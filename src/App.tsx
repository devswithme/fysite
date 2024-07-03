import { ArrowUpRight, Info, Layers } from 'lucide-react'
import Navbar from './components/navbar'
import { buttonVariants } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import Footer from './components/footer'
import Mask from './components/mask'
import { useState } from 'react'

function App() {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		msg: '',
	})
	return (
		<>
			<Mask />
			<Navbar />
			<main className='flex-1'>
				<div className='container relative'>
					<section className='mx-auto flex max-w-[980px] flex-col items-center gap-2 pt-8 md:pt-12 lg:pt-24'>
						<a className='inline-flex items-center rounded-lg bg-muted px-3 py-1 text-xs md:text-sm font-medium'>
							<Info className='w-4 h-4' />
							<div
								data-orientation='vertical'
								role='none'
								className='shrink-0 bg-border w-[1px] mx-2 h-4'></div>{' '}
							<span>Introducing</span>
							<ArrowUpRight className='w-4 h-4 ml-2' />
						</a>
						<h1 className='font-ubuntu text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]'>
							from idea to site
						</h1>
						<span
							className='max-w-[750px] text-center text-sm md:text-lg font-light text-foreground text-balance'
							data-br=':rbj:'
							data-brr='1'>
							A front-end web creation agency especially for UMKM and
							startup business
						</span>
						<div className='flex w-full items-center justify-center space-x-4 py-4 md:pb-10'>
							<a
								href='#ourwork'
								className={buttonVariants({ size: 'sm' })}>
								<Layers className='w-4 h-4 mr-2' />
								Our Work
							</a>
							<a
								href='#contactus'
								className={buttonVariants({
									size: 'sm',
									variant: 'outline',
								})}>
								Contact
							</a>
						</div>
					</section>
					<section
						id='ourwork'
						className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
						<img src='work/1.png' />
						<img src='work/2.png' />
						<img src='work/3.png' />
						<img src='work/4.png' />
					</section>
					<section
						id='contactus'
						className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
						<h1 className='font-ubuntu text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]'>
							Contact Us
						</h1>
						<span className='max-w-[750px] text-center text-sm md:text-lg font-light text-foreground text-balance'>
							Any idea? fill the form for our further dicussion!
						</span>
						<form className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 w-full py-4 md:py-10'>
							<div className='grid grid-cols-2 gap-4 w-full'>
								<div className='col-span-2 md:col-span-1'>
									<Label>Name</Label>
									<Input
										value={contact.name}
										onChange={(e) =>
											setContact((prev) => ({
												...prev,
												name: e.target.value,
											}))
										}
									/>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<Label>Email Address</Label>
									<Input
										type='email'
										value={contact.email}
										onChange={(e) =>
											setContact((prev) => ({
												...prev,
												email: e.target.value,
											}))
										}
									/>
								</div>
								<div className='col-span-2'>
									<Label>Any thoughts?</Label>
									<Textarea
										value={contact.msg}
										onChange={(e) =>
											setContact((prev) => ({
												...prev,
												msg: e.target.value,
											}))
										}
									/>
								</div>
								<div className='col-span-2'>
									<a
										onClick={() => {
											window.location.href = `https://wa.me/6281910090007?text=${contact.name}-${contact.email}:${contact.msg}`
											setContact({ name: '', email: '', msg: '' })
										}}
										className={buttonVariants({
											size: 'sm',
											className: 'w-full md:w-auto',
										})}>
										Let's work together{' '}
										<ArrowUpRight className='w-4 h-4 ml-2' />
									</a>
								</div>
							</div>
							<div>
								<ol className='space-y-4 text-right'>
									<li className='relative'>
										<a href='/'>
											<h1 className='text-md md:text-xl font-light'>
												www.s.id/
												<span className='font-semibold'>fysite</span>
												<ArrowUpRight className='ml-2 inline w-4 h-4 md:w-auto md:h-auto' />
											</h1>
											<p className='text-muted-foreground font-light text-sm md:text-md'>
												Our company profile website
											</p>
										</a>
									</li>
									<li>
										<a href='https://instagram.com/fysite.id'>
											<h1 className='text-md md:text-xl font-light'>
												instagram.com/
												<span className='font-semibold'>
													fysite.id
												</span>
												<ArrowUpRight className='ml-2 inline w-4 h-4 md:w-auto md:h-auto' />
											</h1>
											<p className='text-muted-foreground font-light text-sm md:text-md'>
												Visit our latest post
											</p>
										</a>
									</li>
									<li>
										<a href='https://tiktok.com/@fysite.id'>
											<h1 className='text-md md:text-xl font-light'>
												tiktok.com/@
												<span className='font-semibold'>
													fysite.id
												</span>
												<ArrowUpRight className='ml-2 inline w-4 h-4 md:w-auto md:h-auto' />
											</h1>
											<p className='text-muted-foreground font-light text-sm md:text-md'>
												Visit our latest video
											</p>
										</a>
									</li>
								</ol>
							</div>
						</form>
					</section>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
