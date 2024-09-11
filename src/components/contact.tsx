import { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button, buttonVariants } from './ui/button'
import { ArrowUpRight, Check } from 'lucide-react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'

const Contact = () => {
	const [contact, setContact] = useState({
		plan: '',
		name: '',
		email: '',
		msg: '',
	})
	return (
		<section
			id='order-now'
			className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:pb-8 lg:pb-20'>
			{/* <h1 className='font-ubuntu text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]'>
				Order Now
			</h1>
			<span className=' text-center text-sm md:text-lg font-light text-foreground text-balance'>
				Please fill out the form for our further collaboration
			</span> */}
			<div className='grid grid-cols-1 md:grid-cols-2 py-4 w-full md:py-10 gap-4'>
				<div className='bg-gradient-to-tr from-indigo-600 to-black p-1.5 rounded-xl shadow-sm border relative'>
					<Card className='w-full border-none rounded-lg'>
						<div className='absolute top-0 right-0 px-4 py-2 bg-black text-white text-xs rounded-bl-xl rounded-tr-xl '>
							<h1>Most Popular 🔥</h1>
						</div>
						<CardHeader className='pt-4'>
							<CardTitle className='font-ubuntu font-medium text-xl'>
								Fy-siters
							</CardTitle>
							<CardDescription className='leading-tight font-light text-muted-foreground'>
								<span className='font-semibold text-black'>500K</span>
								/year
							</CardDescription>
						</CardHeader>
						<CardContent className='font-light text-sm md:text-base pt-4'>
							<ul className='space-y-0.5'>
								<li className='flex items-center gap-x-3'>
									<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
									Live preview link provided while developing
								</li>
								<li className='flex items-center gap-x-3'>
									<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
									Hosting & Domain (.co.id, .id, .com)
								</li>
								<li className='flex items-center gap-x-3'>
									<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
									CMS (Content Management System) & Analytics
								</li>
							</ul>
						</CardContent>
						<CardFooter className='mt-2'>
							<Button
								className='w-full'
								size='sm'
								variant={
									contact.plan == 'Fy-siters' ? 'default' : 'outline'
								}
								onClick={() =>
									setContact((prev) => ({
										...prev,
										plan: 'Fy-siters',
									}))
								}>
								Subscribe <ArrowUpRight className='w-4 h-4 ml-2' />
							</Button>
						</CardFooter>
					</Card>
				</div>
				<div className='bg-gradient-to-tr from-orange-600 to-pink-600 p-1.5 rounded-xl shadow-sm border'>
					<Card className='w-full rounded-lg border-none'>
						<CardHeader className='pt-4'>
							<CardTitle className='font-ubuntu font-medium text-xl'>
								Fy-executives
							</CardTitle>
							<CardDescription className='font-light text-muted-foreground'>
								<span className='font-semibold text-black'>
									1000K
								</span>
								/year
							</CardDescription>
						</CardHeader>
						<CardContent className='font-light text-sm md:text-base pt-4'>
							<ul className='space-y-0.5'>
								<li className='flex items-center gap-x-3'>
									<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
									Custom CMS (User-friendly, minimal)
								</li>
								<li className='flex items-center gap-x-3'>
									<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
									Custom design and feature
								</li>
								<li className='flex items-center gap-x-3'>
									<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
									All Fy-siters features
								</li>
							</ul>
						</CardContent>
						<CardFooter className='mt-2'>
							<Button
								className='w-full'
								size='sm'
								variant={
									contact.plan == 'Fy-executives'
										? 'default'
										: 'outline'
								}
								onClick={() =>
									setContact((prev) => ({
										...prev,
										plan: 'Fy-executives',
									}))
								}>
								Subscribe <ArrowUpRight className='w-4 h-4 ml-2' />
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
			<form className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 w-full pb-4'>
				<div className='grid grid-cols-2 gap-4 w-full'>
					<div className='col-span-2 md:col-span-1 space-y-2'>
						<Label>Name</Label>
						<Input
							value={contact.name}
							placeholder='John Doe'
							onChange={(e) =>
								setContact((prev) => ({
									...prev,
									name: e.target.value,
								}))
							}
						/>
					</div>
					<div className='col-span-2 md:col-span-1 space-y-2'>
						<Label>Email Address</Label>
						<Input
							type='email'
							placeholder='you@example.com'
							value={contact.email}
							onChange={(e) =>
								setContact((prev) => ({
									...prev,
									email: e.target.value,
								}))
							}
						/>
					</div>
					<div className='col-span-2 space-y-2'>
						<Label>
							Additional info <i>(will add the pricing)</i>
						</Label>
						<Textarea
							value={contact.msg}
							rows={4}
							placeholder='I want to have some additional features..'
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
								if (
									contact.email &&
									contact.msg &&
									contact.name &&
									contact.plan
								) {
									window.location.href = `https://wa.me/6281910090007?text=[${contact.plan}] ${contact.name}-${contact.email}:${contact.msg}`
									setContact({
										name: '',
										email: '',
										msg: '',
										plan: '',
									})
								}
							}}
							className={buttonVariants({
								size: 'sm',
								className:
									'w-full md:w-auto bg-gradient-to-bl from-indigo-700 to-indigo-950 border-2 border-indigo-900 cursor-pointer',
							})}>
							Let's work together{' '}
							<ArrowUpRight className='w-4 h-4 ml-2' />
						</a>
					</div>
				</div>
				<div>
					<ol className='space-y-4 md:text-right'>
						<li className='relative'>
							<a href='/'>
								<h1 className='text-md md:text-xl font-light'>
									<span className='font-semibold'>www.fysite.id</span>
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
									<span className='font-semibold'>fysite.id</span>
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
									<span className='font-semibold'>fysite.id</span>
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
	)
}

export default Contact
