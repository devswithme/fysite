const Footer = () => {
	return (
		<footer className='py-6 md:px-8 md:py-0 border-t'>
			<div className='container flex max-w-screen-lg flex-col items-center justify-between gap-4 md:h-20 md:flex-row'>
				<p className='text-balance text-center text-sm font-light leading-loose md:text-left'>
					&copy; {new Date().getFullYear()}{' '}
					<a
						href='https://s.id/fysite'
						target='_blank'
						rel='noreferrer'
						className='font-semibold'>
						fysite
					</a>{' '}
					by{' '}
					<a
						href='https://nathanl.vercel.app'
						target='_blank'
						rel='noreferrer'
						className='font-semibold'>
						Nathan
					</a>
					.
				</p>
			</div>
		</footer>
	)
}

export default Footer
