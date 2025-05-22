import './index.css';

const sections = [
	{
		id: 'hero',
		title: 'Stack Evolve',
		subtitle: 'Empowering Digital Evolution',
		description: `We build, migrate, and evolve your digital presence with cutting-edge web, mobile, cloud, and AI/ML solutions.`,
		cta: 'Start Your Evolution',
	},
	{
		id: 'web',
		title: 'Web Solutions',
		description: `Modern, scalable, and secure web applications tailored for your business success.`,
	},
	{
		id: 'software',
		title: 'Software Application Solutions',
		description: `Custom software to streamline operations, drive innovation, and accelerate growth.`,
	},
	{
		id: 'mobile',
		title: 'Mobile Application Development & Migration',
		description: `Native and cross-platform mobile apps, plus seamless migration for next-gen experiences.`,
	},
	{
		id: 'cloud',
		title: 'Cloud Solutions',
		description: `Cloud-native architectures, migration, and optimization for agility and scale.`,
	},
	{
		id: 'ai',
		title: 'AI/ML Solutions',
		description: `Intelligent applications powered by AI/ML for automation, insight, and transformation.`,
	},
	{
		id: 'migration',
		title: 'Migration Services',
		description: `Seamless migration of legacy systems to modern platforms with minimal disruption.`,
	},
	{
		id: 'contact',
		title: 'Let’s Build the Future Together',
		description: `Ready to evolve? Reach out to our team of passionate developers and architects.`,
		cta: 'Contact Us',
	},
];

function Logo() {
	return (
		<div className="flex items-center justify-center gap-2 py-8 animate-fade-in">
			<span className="text-4xl font-logo font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text tracking-tight">
				&#60;/&gt; Stack Evolve
			</span>
		</div>
	);
}

function Section({ title, subtitle, description, cta, id }: any) {
	return (
		<section
			id={id}
			className="py-16 px-4 max-w-3xl mx-auto text-center animate-slide-up"
		>
			<h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary font-logo drop-shadow-lg">
				{title}
			</h2>
			{subtitle && (
				<h3 className="text-xl md:text-2xl mb-2 text-secondary font-semibold">
					{subtitle}
				</h3>
			)}
			<p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4 font-body">
				{description}
			</p>
			{cta && (
				<button className="mt-4 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg hover:scale-105 transition-transform font-bold text-lg animate-bounce">
					{cta}
				</button>
			)}
		</section>
	);
}

function App() {
	return (
		<div className="bg-bg min-h-screen w-full flex flex-col">
			<Logo />
			<nav className="flex justify-center gap-6 pb-6 animate-fade-in">
				{sections.map((s) => (
					<a
						key={s.id}
						href={`#${s.id}`}
						className="text-lg font-semibold text-primary hover:text-accent transition-colors duration-200"
					>
						{s.title}
					</a>
				))}
			</nav>
			<main className="flex-1">
				{sections.map((section) => (
					<Section key={section.id} {...section} />
				))}
			</main>
			<footer className="py-8 text-center text-gray-500 text-sm animate-fade-in">
				© {new Date().getFullYear()} Stack Evolve. Crafted by developers, for
				the future.
			</footer>
		</div>
	);
}

export default App;
