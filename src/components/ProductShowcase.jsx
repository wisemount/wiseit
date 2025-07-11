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
		pricing: [
			{ type: 'Lite', monthly: '₹1,499', yearly: '₹15,000', lifetime: '₹35,000' },
			{ type: 'Pro', monthly: '₹4,999', yearly: '₹52,000', lifetime: '₹99,000' },
			{ type: 'Elite', monthly: '₹14,999', yearly: '₹155,000', lifetime: '₹2,25,000' },
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
		pricing: [
			{ type: 'Lite', monthly: '₹2,499', yearly: '₹25,500', lifetime: '₹49,000' },
			{ type: 'Pro', monthly: '₹7,499', yearly: '₹76,000', lifetime: '₹1,49,000' },
			{ type: 'Elite', monthly: '₹19,999', yearly: '₹199,000', lifetime: '₹2,99,000' },
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
		pricing: [
			{ type: 'Lite', monthly: '₹999', yearly: '₹10,000', lifetime: '₹25,000' },
			{ type: 'Pro', monthly: '₹3,499', yearly: '₹36,000', lifetime: '₹74,000' },
			{ type: 'Elite', monthly: '₹9,999', yearly: '₹104,000', lifetime: '₹1,49,000' },
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
		pricing: [
			{ type: 'Lite', monthly: '₹499', yearly: '₹5,000', lifetime: '₹12,000' },
			{ type: 'Pro', monthly: '₹1,999', yearly: '₹20,000', lifetime: '₹39,000' },
			{ type: 'Elite', monthly: '₹4,999', yearly: '₹51,000', lifetime: '₹89,000' },
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
		pricing: [
			{ type: 'Lite', monthly: '₹999', yearly: '₹10,000', lifetime: '₹22,000' },
			{ type: 'Pro', monthly: '₹3,499', yearly: '₹35,000', lifetime: '₹69,000' },
			{ type: 'Elite', monthly: '₹8,999', yearly: '₹92,000', lifetime: '₹1,45,000' },
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
		pricing: [
			{ type: 'Lite', monthly: '₹2,999', yearly: '₹30,000', lifetime: '₹59,000' },
			{ type: 'Pro', monthly: '₹9,999', yearly: '₹100,000', lifetime: '₹1,80,000' },
			{ type: 'Elite', monthly: '₹24,999', yearly: '₹250,000', lifetime: '₹3,75,000' },
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
		pricing: [
			{ type: 'Lite', monthly: '₹1,499', yearly: '₹15,000', lifetime: '₹29,000' },
			{ type: 'Pro', monthly: '₹5,999', yearly: '₹61,000', lifetime: '₹1,10,000' },
			{ type: 'Elite', monthly: '₹12,999', yearly: '₹132,000', lifetime: '₹1,99,000' },
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
		pricing: [
			{ type: 'Lite', monthly: '₹1,499', yearly: '₹15,000', lifetime: '₹32,000' },
			{ type: 'Pro', monthly: '₹5,499', yearly: '₹55,000', lifetime: '₹1,10,000' },
			{ type: 'Elite', monthly: '₹13,999', yearly: '₹139,000', lifetime: '₹2,25,000' },
		],
	},
	{
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
		pricing: [
			{ type: 'Lite', monthly: '₹1,999', yearly: '₹20,000', lifetime: '₹39,000' },
			{ type: 'Pro', monthly: '₹6,999', yearly: '₹71,000', lifetime: '₹1,30,000' },
			{ type: 'Elite', monthly: '₹17,999', yearly: '₹182,000', lifetime: '₹2,75,000' },
		],
	},
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
	<section id="products" className="container" style={{ padding: '2rem 0' }}>
		<h2
      style={{
        fontFamily: 'Poppins',
        fontWeight: 900,
        fontSize: 52,
        textAlign: 'center',
        marginBottom: 32,
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
    </h2>
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
				gap: 32,
				justifyContent: 'center',
				alignItems: 'stretch',
			}}
		>
			{products.map((product) => (
				<div
					className="card"
					key={product.name}
					style={{
						minHeight: 420,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'flex-start',
						padding: '2.5rem 1.5rem 2rem 1.5rem',
						boxSizing: 'border-box',
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
							width: 156,
							height: 156,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							marginBottom: 18,
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
								width: 128,
								height: 128,
								objectFit: 'contain',
								display: 'block',
								margin: '0 auto',
								background: 'none',
								aspectRatio: '1/1',
								maxWidth: '128px',
								maxHeight: '128px',
								minWidth: '128px',
								minHeight: '128px',
							}}
						/>
					</div>
					<h3
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 24,
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
							fontSize: 14,
							fontWeight: 600,
							marginBottom: 8,
							display: 'inline-block',
						}}
					>
						{product.tag}
					</span>
					<p
						style={{
							fontFamily: 'Open Sans',
							fontSize: 16,
							textAlign: 'center',
							marginBottom: 12,
							minHeight: 48,
						}}
					>
						{product.description}
					</p>
					<ul
						style={{
							fontFamily: 'Open Sans',
							fontSize: 15,
							textAlign: 'left',
							paddingLeft: 18,
							margin: 0,
							listStyle: 'disc',
							display: 'flex',
							flexDirection: 'column',
							gap: 4,
						}}
					>
						{product.features.map((f) => (
							<li key={f}>{f}</li>
						))}
					</ul>
					<div style={{width: '100%', marginTop: 18}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontFamily: 'Open Sans', fontSize: 15, background: 'rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(30,58,138,0.06)'}}>
              <thead>
                <tr style={{background: 'rgba(6,182,212,0.10)'}}>
                  <th style={{padding: '6px 8px', fontWeight: 700, color: 'var(--color-accent)', borderBottom: '1px solid rgba(30,58,138,0.08)'}}>Type</th>
                  <th style={{padding: '6px 8px', fontWeight: 700, color: 'var(--color-accent)', borderBottom: '1px solid rgba(30,58,138,0.08)'}}>Monthly</th>
                  <th style={{padding: '6px 8px', fontWeight: 700, color: 'var(--color-accent)', borderBottom: '1px solid rgba(30,58,138,0.08)'}}>Yearly</th>
                  <th style={{padding: '6px 8px', fontWeight: 700, color: 'var(--color-accent)', borderBottom: '1px solid rgba(30,58,138,0.08)'}}>Lifetime</th>
                </tr>
              </thead>
              <tbody>
                {product.pricing && product.pricing.map((plan) => (
                  <tr key={plan.type} style={{background: plan.type === 'Elite' ? 'rgba(249,115,22,0.08)' : 'transparent'}}>
                    <td style={{padding: '6px 8px', fontWeight: 600, color: plan.type === 'Elite' ? 'var(--color-secondary)' : '#fff'}}>{plan.type}</td>
                    <td style={{padding: '6px 8px'}}>{plan.monthly}</td>
                    <td style={{padding: '6px 8px'}}>{plan.yearly}</td>
                    <td style={{padding: '6px 8px'}}>{plan.lifetime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
				</div>
			))}
		</div>
	</section>
);

export default ProductShowcase;
