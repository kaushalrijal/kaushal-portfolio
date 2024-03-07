import Image from 'next/image';
import type { Metadata } from 'next'
import Education from './components/education';
import Projects from './components/projects';
import Inprogress from './components/inprogress';
import Skills from './components/skills';
import Social from './components/social';
import Avatar from '../../assets/sym.jpg';

const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-medium">
						Kaushal <span className="text-primary">Rijal</span>
					</h1>
					<p>
						Student <span className="font-bold"> | Open Source</span> <span className="px-2 py-1 text-xs rounded-md text-primary bg-primary/10">
							<span>NEW</span>
						</span>
					</p>
					<p>Namaskar!</p>
					<p className="text-justify">
						My name is Kaushal Rijal! I'm all about the power of data science and machine learning, and I'm always on the lookout for new ways to push the boundaries of what's possible.
					</p>
				</div>
				<Image
					src={Avatar}
					alt="Kaushal Rijal"
					className="object-cover w-auto h-64 md:w-32 md:h-auto grayscale"
					width={300}
					height={300}
					placeholder='blur'
				/>
			</div>
			<div className="flex gap-2">
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="DoB: 2005AD">
					2005
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Blood group: B+VE">
					B+VE
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Height: 5 feet 8 and a half inches">
					<span>5'7</span>
				</div>
			</div>

			<Education />

			<Projects />

			<Inprogress />

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-medium">Kontact</h2>
				<ul className="list-inside">
					<li>
						<span>{'email: '}</span>
						<a href="mailto:mail@kaushalrijal.com.np" className="italic underline text-primary">
							mail@kaushalrijal.com.np
						</a>
					</li>
					<li>
						<span>{'full website: '}</span>
						<a href="https://full.kaushalrijal.com.np" target="_blank" className="italic underline text-primary">
							full.kaushalrijal.com.np
						</a>(under development)
					</li>
				</ul>
			</div>

			<p className="text-xs">
				{'Kaushal Rijal ' + new Date().getFullYear()}, <a href='https://github.com/bhaskarrijal/bhaskarrijal-min' target='_blank' className='italic underline text-primary'>open source</a>
			</p>
		</div>
	);
};

export default Page;
