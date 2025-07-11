import React from 'react';
import wisestudioLogo from '../assets/wisestudio-logo.png';
import wisecareLogo from '../assets/wisecare-logo.png';
import wisestoreLogo from '../assets/wisestore.png';
import wisebillsLogo from '../assets/wiseBills.png';
import wisehrLogo from '../assets/wiseHR-logo.png';
import wiseerpLogo from '../assets/wiseERP.png';
import wiselmsLogo from '../assets/wiseLMS.png';
import wisecrmLogo from '../assets/wiseCRM.png';
import wiselendLogo from '../assets/wiseLend.png';

const products = [
	{
		name: 'WiseStudio',
		tag: 'Multi-Sector Digital Transformation',
		description:
			'Transform your business across all 12 sectors with our comprehensive digital platform.',
		image: wisestudioLogo,
		features: [
			'Class scheduling',
			'Zoom/Google Meet integration',
			'Advanced Analytics',
			'Email reminders',
			'Multi-instructor support',
			'Custom branding',
			'Payment integration',
			'Unlimited users',
      'Covers 12+ business sectors',
			'Unified digital platform',
			'Customizable modules',
			'Analytics & reporting',
			'White-labeling',
			'Dedicated support',
			'Mobile app access',
			'API Access',
		],
	},
	{
		name: 'WiseCare',
		tag: 'Next-Gen Healthcare Tech',
		description: 'Advanced healthcare management solution for superior patient care.',
		image: wisecareLogo,
		features: [
			'Patient registration',
			'Clinical EMR',
			'Appointment booking',
			'Vitals tracking',
			'Lab & pharmacy modules',
			'Role-based access',
			'Inventory management',
			'Reports & analytics',
			'Full hospital workflow',
			'Multi-facility support',
			'Custom integrations',
			'Data backups & security',
			'Lab & radiology management',
			'Billing & insurance',
			'Clinical decision support',
			'OpenMRS integration',
			'Telemedicine',
		],
	},
	{
		name: 'WiseStore',
		tag: 'Future of Digital Retail',
		description: 'Powerful e-commerce platform for seamless online retail.',
		image: wisestoreLogo,
		features: [
			'Single store setup',
			'Product catalog',
			'Coupon codes',
			'Razorpay/Stripe integration',
			'Multistore capability',
			'Advanced filtering',
			'Email/SMS marketing',
			'Inventory alerts',
			'Marketplace model',
			'Vendor dashboard',
			'Custom checkout',
			'MobileEcom ready',
			'Order & cart management',
			'Customer accounts',
			'Payment gateway integration',
			'Shipping & tax management',
		],
	},
	{
		name: 'WiseBills',
		tag: 'Smart Financial Operations',
		description:
			'Streamlined financial management with our billing solution for businesses of all sizes.',
		image: wisebillsLogo,
		features: [
			'Invoice creation & management',
			'Recurring billing',
			'Expense tracking',
			'Payment reminders',
			'Financial analytics',
			'Multi-currency support',
		],
	},
	{
		name: 'WiseHRM',
		tag: 'Modern Workforce Management',
		description:
			'Comprehensive human resource management system developed for your business startups.',
		image: wisehrLogo,
		features: [
			'Employee database',
			'Attendance & leave',
			'Payroll management',
			'Recruitment & onboarding',
			'Performance reviews',
			'Document management',
			'Self-service portal',
		],
	},
	{
		name: 'WISERP',
		tag: 'Enterprise Resource Planning',
		description: 'Comprehensive ERP solution for modern businesses.',
		image: wiseerpLogo,
		features: [
			'Accounting & finance',
			'Inventory & warehouse',
			'Sales & purchase management',
			'Manufacturing & production',
			'CRM integration',
			'Project management',
			'HR & payroll',
			'Asset management',
		],
	},
	{
		name: 'WiseLMS',
		tag: 'Learning Management System',
		description: 'Modern LMS for education and corporate training.',
		image: wiselmsLogo,
		features: [
			'Course & content management',
			'Online assessments',
			'Student & instructor portals',
			'Progress tracking',
			'Certification & grading',
			'Discussion forums',
			'Mobile-friendly',
		],
	},
	{
		name: 'WiseCRM',
		tag: 'Customer Relationship Management',
		description: 'Advanced CRM platform for sales, support, and marketing.',
		image: wisecrmLogo,
		features: [
			'Lead & opportunity management',
			'Contact & account management',
			'Sales pipeline',
			'Email & communication tracking',
			'Reports & analytics',
			'Task & activity management',
		],
	},
	/* {
		name: 'WiseLend',
		tag: 'Digital Lending Platform',
		description: 'Flexible lending and loan management solution.',
		image: wiselendLogo,
		features: [
			'Loan origination',
			'KYC & document management',
			'Repayment schedules',
			'Automated reminders',
			'Disbursement & collection',
			'Analytics & reporting',
		],
	}, */
];

// Gradient map for product names
const productGradients = {
  WiseStudio: 'linear-gradient(90deg, #00c6fb 0%, #005bea 100%)',
  WiseCare: 'linear-gradient(90deg, #f7971e 0%, #ffd200 100%)',
  WiseStore: 'linear-gradient(90deg, #f953c6 0%, #b91d73 100%)',
  WiseBills: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
  WiseHRM: 'linear-gradient(90deg, #fa709a 0%, #fee140 100%)',
  WISERP: 'linear-gradient(90deg, #30cfd0 0%, #330867 100%)',
  WiseLMS: 'linear-gradient(90deg, #a8ff78 0%, #78ffd6 100%)',
  WiseCRM: 'linear-gradient(90deg, #f857a6 0%, #ff5858 100%)',
  WiseLend: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
};

const ProductShowcase = () => (
	<section id="products" style={{ padding: '2rem 0', width: '100%', overflow: 'hidden' }}>
    <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
			<h2
				style={{
					fontFamily: 'Poppins',
					fontWeight: 900,
					fontSize: 'clamp(2rem, 5vw, 3.5rem)',
					textAlign: 'center',
					marginBottom: '2rem',
					background: 'linear-gradient(90deg, #fffbe6 0%, #e0e7ff 50%, #f0fdfa 100%)',
					WebkitBackgroundClip: 'text',
					backgroundClip: 'text',
					color: 'transparent',
					WebkitTextFillColor: 'transparent',
					letterSpacing: 1.5,
					filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.10))',
				}}
			>
				Wise Product Suite
			</h2>		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(4, 1fr)',
				gap: 'clamp(1rem, 2vw, 1.5rem)',
				justifyContent: 'center',
				alignItems: 'stretch',
			}}
			className="products-grid"
		>
				{products.map((product) => (
					<div
						className="card"
						key={product.name}
						style={{
							minHeight: 'auto',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'flex-start',
							padding: 'clamp(1rem, 3vw, 2.5rem) clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 3vw, 2rem) clamp(0.75rem, 2vw, 1.5rem)',
							boxSizing: 'border-box',
							width: '100%',
						}}
					>
						<div
							className={`product-logo-animated-border ${
								product.name === 'WiseStudio' ? 'wisestudio-logo' :
								product.name === 'WiseCare' ? 'wisecare-logo' :
								product.name === 'WiseStore' ? 'wisestore-logo' :
								product.name === 'WiseBills' ? 'wisebills-logo' :
								product.name === 'WiseHRM' ? 'wisehr-logo' :
								product.name === 'WISERP' ? 'wiseerp-logo' :
								product.name === 'WiseLMS' ? 'wiselms-logo' :
								product.name === 'WiseCRM' ? 'wisecrm-logo' :
								product.name === 'WiseLend' ? 'wiselend-logo' : ''
							}`}
							style={{
								width: 'clamp(120px, 15vw, 156px)',
								height: 'clamp(120px, 15vw, 156px)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								marginBottom: '1rem',
								boxShadow: '0 4px 16px rgba(30,58,138,0.10)',
								overflow: 'hidden',
								background: 'none',
								borderRadius: '32px',
								padding: 0,
							}}
						>
							<img
								src={product.image}
								alt={product.name}
								style={{
									width: 'clamp(96px, 12vw, 128px)',
									height: 'clamp(96px, 12vw, 128px)',
									objectFit: 'contain',
									display: 'block',
									margin: '0 auto',
									background: 'none',
									aspectRatio: '1/1',
								}}
							/>
						</div>
						<h3
							style={{
								fontFamily: 'Poppins',
								fontWeight: 700,
								fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
								margin: '8px 0',
								textAlign: 'center',
								background: productGradients[product.name] || 'var(--color-secondary)',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								color: 'transparent',
								WebkitTextFillColor: 'transparent',
							}}
						>
							{product.name}
						</h3>
						<span
							style={{
								background: 'var(--color-accent)',
								color: '#fff',
								borderRadius: 8,
								padding: '2px 12px',
								fontSize: 'clamp(12px, 2.5vw, 14px)',
								fontWeight: 600,
								marginBottom: 8,
								display: 'inline-block',
								textAlign: 'center',
							}}
						>
							{product.tag}
						</span>
						<p
							style={{
								fontFamily: 'Open Sans',
								fontSize: 'clamp(14px, 2.5vw, 16px)',
								textAlign: 'center',
								marginBottom: 12,
								minHeight: 'auto',
								lineHeight: 1.5,
							}}
						>
							{product.description}
						</p>
						<ul
							style={{
								fontFamily: 'Open Sans',
								fontSize: 'clamp(13px, 2.5vw, 15px)',
								textAlign: 'left',
								paddingLeft: 18,
								margin: '0 0 1rem 0',
								listStyle: 'disc',
								display: 'flex',
								flexDirection: 'column',
								gap: 4,
								width: '100%',
							}}
						>
							{product.features.map((f) => (
								<li key={f} style={{ lineHeight: 1.4 }}>{f}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default ProductShowcase;
