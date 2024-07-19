import {
  LockIcon,
  ClockIcon,
  CirclesIcon,
  HeartIcon,
  StepsIcon,
  LaptopIcon,
  TableIcon,
  InfoIcon, MessageIcon
} from './components/icons';

export const homeMovers =  {
  header: {
    imageSrc: '/images/EatingPizzaAtHome.png',
    title: 'For Home Movers',
    subTitle: 'Snappily has been referred by your estate agent to assist you in completing the legally required documents for your home move.',
  },
  transactionProcess: {
    title: <h1 className="text-2xl font-bold -tracking-[2px]">Why is Snappily important in the <span className="text-coral">Transaction Process?</span></h1>,
    items: [
      {
        id: 1,
        titles: ['Speeding up the', 'transaction process'],
        text: 'Snappily ensures both your agent and conveyancer have access to all essential information about your property upfront. This seamless transfer of information and documents minimizes unnecessary questions and duplication, speeding up the transaction process.'
      },
      {
        id: 2,
        titles: ['Attracting', 'more offers'],
        text: 'Snappily\'s detailed property information empowers your agent to showcase your home in its best light, captivating more prospective buyers. This enhanced presentation often leads to increased offers and facilitates a faster sale.'
      },
      {
        id: 3,
        titles: ['Reducing', 'fall-throughs'],
        text: 'Completing the information accurately is like putting a safety net under your sale. It helps make sure you follow all the legal rules and reduces the chance of issues happening down the line. This can help stop the sale from falling through, saving time and effort for everyone involved.'
      }
    ]
  },
  articles: [
    {
      id: 1,
      imageSrc: '/images/ESign.png',
      title: <h2 className="text-lg font-bold -tracking-[2px]"><span className="text-coral">Swift </span>Digital Completion</h2>,
      text: 'Say goodbye to the hassle of paperwork. With Snappily, you can complete all essential documents digitally, right from your home. Designed to be user-friendly and free of legal jargon, our platform makes the process smooth and stress-free.',
      bgColor: '#fbe8de'
    },
    {
      id: 2,
      imageSrc: '/images/ScreenWithList.png',
      title: <h2 className="text-lg font-bold -tracking-[2px]"><span className="text-coral">Secure </span>Document Management</h2>,
      text: 'Our digital platform offers a secure way to manage your documents. Easily upload, review, and sign all necessary paperwork, stored in one convenient location for peace of mind. With Snappily, securely share documents between relevant parties for seamless collaboration.',
      bgColor: '#dfdefb'
    },
    {
      id: 3,
      imageSrc: '/images/Rabbit.png',
      title: <h2 className="text-lg font-bold -tracking-[2px]"><span className="text-coral">Speed Up </span>Your Transaction</h2>,
      text: 'Snappily simplifies compliance tasks, saving you time and effort. We eliminate duplication and streamline questions, providing upfront information for a faster, more enjoyable home moving experience.',
      bgColor: '#defafb'
    }
  ]
};

export const partners = {
  header: {
    imageSrc: '/images/ForSale.png',
    title: 'For Partners',
    subTitle: 'Partner with Snappily for a seamless, secure, and stress-free home moving experience. We’re here to support every step of the way, ensuring everything is in order and gets done snappily!',
  },
  articles: [
    {
      id: 1,
      imageSrc: '/images/Section.png',
      title: <h2 className="text-lg font-bold -tracking-[2px]"><span className="text-coral">Streamline </span>Compliance</h2>,
      text: 'We partner with estate agencies nationwide to support home buyers and sellers right from the start of their moving journey, ensuring properties are listed compliantly. With Snappily, all necessary compliance information and documents are digitally available at your fingertips, providing peace of mind with regulations. We are your one-stop-shop for compliance.',
      bgColor: '#fbe8de'
    },
    {
      id: 2,
      imageSrc: '/images/Section.png',
      title: <h2 className="text-lg font-bold -tracking-[2px]"><span className="text-coral">Boost </span>Efficiency</h2>,
      text: 'Our compliance platform centralises all compliance tasks, eliminating the need for multiple logins and various apps. By minimising paperwork and offering support, we facilitate an efficient property transaction process, allowing you to focus on what you do best.',
      bgColor: '#dfdefb'
    },
    {
      id: 3,
      imageSrc: '/images/Section.png',
      title: <h2 className="text-lg font-bold -tracking-[2px]"><span className="text-coral">Enhance </span>Client Satisfaction</h2>,
      text: 'Providing a better experience for your clients not only makes their home moving process easier but also reflects positively on your services. Our co-branded platform offers additional value, helping you stand out in a competitive market. Our Snappily support service complements your business, blending human touch with technological efficiency to suit your preferences.',
      bgColor: '#defafb'
    }
  ]
};

export const aboutUs = {
  header: {
    imageSrc: '/images/PageTitle.png',
    title: 'Making Home Moves Easy',
    subTitle: "We're an app dedicated to providing a seamless experience for home movers, minimising paperwork and providing clear guidance for UK property transactions. We partner with estate agencies nationwide to assist home buyers and sellers in the initial phase of the home moving process. We are here to ensure that when an estate agent lists a property for sale, they have all the required compliance information to hand. We simply support the process to ensure everything is in order and gets done snappily!",
    note: 'Please note, we do not list properties for sale. For any property-related questions, kindly contact your estate agent.'
  },
  points: [
    "It's part of our service to help you complete paperwork promptly, so your agent can list your property for sale.",
    "The Snappily Support Team is here to help with any questions about using Snappily and completing your paperwork. We're available from 9 AM to 5:30 PM, Monday to Friday. Our live Chatbot can provide automated assistance with most queries so do give it a go!",
    "As part of this you may get email or text reminders. If you'd rather not receive reminders, just let Snappily Support know and we’ll stop contacting you right away.",
    "If you have any particular questions about the sales process itself, please remember to contact your estate agent."
  ]
};

export const faq = {
  header: {
    imageSrc: '/images/HappyCallCenter.png',
    title: 'Frequently Asked Questions',
  },
  questions: [
    {
      id: 'question-1',
      text: 'What is Snappily?',
      answer: <>
        <p>We&apos;re a tech company dedicated to providing a seamless experience for home movers, minimising paperwork and providing clear guidance for UK property transactions. We partner with estate agencies nationwide to assist home buyers and sellers in the initial phase of the home moving process so you can:</p>
        <ul className="ml-[21px] list-disc">
          <li><span className="font-semibold">Say goodbye to the hassle of paperwork.</span> Snappily lets you swiftly complete all essential documents digitally, right from home. Designed to be easy-to-use and free of legal jargon, Snappily makes the process smooth and stress-free.</li>
          <li><span className="font-semibold">Speed Up Your Transaction:</span> Snappily simplifies the completion of compliance tasks, saving you time and effort. We cut out the duplication and trim down the questions, aiming to provide information upfront for a more enjoyable (and snappy) home moving experience!</li>
          <li><span className="font-semibold">Securely Manage Documents:</span> Our digital platform offers a secure way to manage your documents. You can easily upload, review, and sign documents, all stored in one place for convenient access and peace of mind. With Snappily, documents can be securely shared between relevant parties, ensuring seamless collaboration.</li>
        </ul>
        <p>Please note, we do not list properties for sale. Your Agent will prepare your brochure and online listing, handling the photography and marketing of your property. For any property-related questions, kindly contact your estate agent.</p>
      </>
    },
    {
      id: 'question-2',
      text: 'How do I log in to Snappily?',
      answer: <>
        <p>Having trouble logging in because your username or password is incorrect? No worries! Here’s how to fix it:</p>
        <ul className="ml-[21px] list-decimal">
          <li>Click “Forgot Password” on the login page.</li>
          <li>Check your email for reset instructions. If it’s not in your inbox, peek into your spam or junk folder.</li>
          <li>Follow the instructions in the email to reset your password.</li>
        </ul>
        <p>If you still don’t see the email or need more help, just reach out to our support team for assistance:
          support@snappily.co.uk. We&apos;re here to help!</p>
        <p>Are you going to list my property for sale?</p>
        <p>We are not going to list your property for sale online. We are a tech company that provides support to home movers to ensure that when your estate agent lists your property, they have all the required compliance information to hand. We simply support the process to ensure everything is in order and gets done snappily!</p>
      </>
    },
    {
      id: 'question-3',
      text: 'Are you going to list my property for sale?',
      answer: <p>We are not going to list your property for sale online. We are a tech company that provides support to
        home movers to ensure that when your estate agent lists your property, they have all the required compliance
        information to hand. We simply support the process to ensure everything is in order and gets done snappily!
      </p>
    },
    {
      id: 'question-4',
      text: 'Why do I need to provide an ID check online?',
      answer: <>
        <p>It is a legal requirement to provide an ID check in the UK for all property transactions.</p>
        <p>For both sales and purchases, it&apos;s important to verify property ownership. The name on your paperwork
          must match the one on the Land Registry Title Deed. If there&apos;s a mismatch (like a maiden name change),
          your agent will review the check results manually. This process is part of ID and anti-money laundering (AML)
          requirements.</p>
        <p>ID checks are a crucial part of property transactions in the UK for several reasons:</p>
        <ul className="ml-[22px] list-disc">
          <li>Legal Compliance: ID checks are required by law to comply with anti-money laundering (AML) regulations,
            preventing illegal activities like money laundering and terrorism financing.
          </li>
          <li>Fraud Prevention: Verifying the identity of all parties in a property transaction protects against fraud,
            ensuring buyers and sellers are who they claim to be, reducing the risk of identity theft and other scams.
          </li>
          <li>Validity Assurance: ID checks confirm that individuals involved have the legal right to engage in the
            transaction, ensuring the sale or purchase is legitimate and protecting all parties.
          </li>
        </ul>
      </>
    },
    {
      id: 'question-5',
      text: 'What is a Property Information Form?',
      answer: <>
        <p>The Property Information Form is like a spotlight on your home, showcasing its best features and allowing you
          to present it in the best light to potential buyers. It includes questions about details only you know, such
          as running costs, any recent home renovations, utilities and any snazzy smart home features.</p>
        <p>So providing more information can make your home more appealing on paper and make potential buyers fall in
          love with it!</p>
      </>
    },
    {
      id: 'question-6',
      text: 'Why is Snappily important in the Transaction Process?',
      answer: <ul className="ml-[16px] list-decimal">
        <li>Speeding up the transaction process: It helps your solicitor thoroughly check the property and identify any
          potential problems that might need fixing before the sale is final. This can help make the whole process
          faster, getting you closer to that sold sign.
        </li>
        <li>Increasing offers and enhancing the presentation of your home: By giving detailed information about your
          home, the form lets your agent show it in the best possible way, making it more appealing to buyers. This can
          lead to more offers and a quicker sale.
        </li>
        <li>Reducing fall-throughs: Completing the form accurately is like putting a safety net under your sale. It
          helps make sure you follow all the legal rules and reduces the chance of arguments happening after the sale.
          This can help stop the sale from falling through, saving time and effort for everyone involved.
        </li>
      </ul>
    },
    {
      id: 'question-7',
      text: 'Why appoint a conveyancer?',
      answer: <>
        <p>Adding a conveyancer at an early stage can help speed up the selling process and reduce the number of legal
          inquiries you might face. Speeding up the process and reducing the legal nitty-gritty you might have to deal
          with. Plus, they can help you navigate any tricky bits ensuring everything is done correctly and efficiently.
          While you&apos;re not required to add one right now, having a conveyancer will make the selling experience
          much smoother.</p>
        <p>Your conveyancer can review documents, identify issues, and start the legal process of selling your property.
          This early collaboration streamlines the process and ensures everything is in order from the start.</p>
        <p>Get ahead of the game and make the process more manageable and enjoyable. Adding your conveyancer early can
          save you time and effort down the road!</p>
      </>
    },
    {
      id: 'question-8',
      text: 'How to Make a Complaint?',
      answer: <>
        <p>We genuinely care about your experience and strive to ensure you are always satisfied with our service. If
          you have any concerns, we treat any expression of dissatisfaction as a complaint. You can raise your complaint
          with any member of our team via email or live chat. We will collect some details to locate your information in
          our system, which will help us investigate your complaint thoroughly.</p>
        <p>Got a concern? Just drop us an email at support@snappily.co.uk or use our live chat. We&apos;ll dive right in
          to sort it out. If we can&apos;t fix it right away, we&apos;ll escalate it to a senior team member and get
          back to you within three working days. If it takes longer, we&apos;ll keep you in the loop.</p>
        <p>Still not satisfied? We&apos;ll help you escalate your concern to the right regulators. Your feedback helps
          us improve, so we always appreciate hearing from you. And just to clarify, we don&apos;t list properties for
          sale. We&apos;re here to make sure your estate agent has all the compliance info they need to list your
          property quickly and smoothly.</p>
      </>
    },
  ],
};

export const home = {
  titleSection: {
    text: 'Our compliance platform and user-friendly app ensure a seamless start to the home moving journey by helping you swiftly manage essential tasks.',
    imageSrc: '/images/FingerClick2.png'
  },
  keys: [
    {
      id: 1,
      content: 'Secure',
      isIcon: false
    },
    {
      id: 2,
      content: <LockIcon />,
      isIcon: true
    },
    {
      id: 3,
      content: 'Secure',
      isIcon: false
    },
    {
      id: 4,
      content: <ClockIcon />,
      isIcon: true
    },
    {
      id: 5,
      content: 'Seamless',
      isIcon: false
    },
    {
      id: 6,
      content: <CirclesIcon />,
      isIcon: true
    },
    {
      id: 7,
      content: 'Straightforward',
      isIcon: false
    },
    {
      id: 8,
      content: <HeartIcon />,
      isIcon: true
    },
    {
      id: 9,
      content: 'Silent Support',
      isIcon: false
    }
  ],
  description: {
    title: <h2 className="text-2xl font-bold -tracking-[2px]">Save Time for the <span className="text-coral">Things That Matter</span></h2>,
    descriptions: [
      'At Snappily, we\'re all about turning home moving into a digital process, rescuing you from the drudgery of paperwork, and offering crystal-clear guidance for UK property transactions.',
      'Our compliance platform, paired with our user-friendly apps, are designed to simplify the property transaction process. We ensure all compliance information is ready to go upfront, making it easier for agents to list properties and for buyers and sellers to glide through the legal hoops of moving.',
      'By streamlining the compliance process and ensuring a seamless handover of documents and details we reduce manual admin by 60%. We’re here to help everyone involved save precious time and effort.',
      'With Snappily, let\'s make every moment count.'
    ]
  },
  targetClients: [
    {
      id: 1,
      title: 'For Partners',
      imageSrc: '/images/BusinessMan.png',
      text: 'By integrating our service, you\'ll not only dazzle your clients but also boost your revenue streams and save countless hours on admin tasks. Get ready for more referrals and happier customers!"'
    },
    {
      id: 2,
      title: 'For Movers',
      imageSrc: '/images/EatingPizzaAtHome.png',
      text: 'Say Goodbye to Moving Hassles with Snappily. With our user-friendly app you can swiftly complete all essential documents digitally from the comfort of home, freeing up more time for the things you love during your move!'
    }
  ],
  testimonials: {
    title: <h1 className="text-xl font-bold -tracking-[2px] text-center">What Our <span className="text-coral">Customers</span> Say</h1>,
    items: [
      {
        id: 1,
        avatar: '/images/Client.png',
        rate: 5,
        text: 'Having used Move Genius for about 6 months now we feel is it a great product which caters for all your onboarding in one place. The support team are always on hand to help us as the Estate Agent & also our sellers! Nothing is ever much trouble. Already recommending to other offices.',
        name: 'Ashley, Hunters Chesterfield',
      },
      {
        id: 2,
        avatar: '/images/Client.png',
        rate: 5,
        text: 'MoveGenius is a quick and convenient service to ensure I’m compliant when onboarding new customers. The team are hands-on with helping progress your clients through the process, which also save me time. Also, since partnering with them, MoveGenius have added more useful features to their service, which gives me confidence that they listen to their clients and are committed to providing the very best product possible.',
        name: 'Jamie, Katie Homes',
      },
      {
        id: 3,
        avatar: '/images/Client.png',
        rate: 5,
        text: '“MoveGenius is simple to use, it does what is says on the tin.”',
        name: 'Joe',
      },
      {
        id: 4,
        avatar: '/images/Client.png',
        rate: 5,
        text: 'MoveGenius have provided us with the opportunity to streamline our Sales on-boarding process, in a digital and mobile way. The easy-to-use platform allows us as an agent to manage our compliance documents, easily view any outstanding Seller tasks, capture important property details before marketing, all whilst saving us a lot of time. Our clients are impressed with their stress-free experience whilst on-boarding with MoveGenius, which has lead to faster turnaround from compliance to going live on the market.',
        name: 'James, Parker & Co',
      },
    ]
  },
  logos: [
    { id: 1, imageSrc: '/images/Logo1.jpg' },
    { id: 2, imageSrc: '/images/Logo2.jpg' },
    { id: 3, imageSrc: '/images/Logo3.jpg' },
    { id: 4, imageSrc: '/images/Logo4.jpg' },
    { id: 5, imageSrc: '/images/Logo5.jpg' },
    { id: 6, imageSrc: '/images/Logo6.jpg' },
    { id: 7, imageSrc: '/images/Logo7.jpg' },
    { id: 8, imageSrc: '/images/Logo8.jpg' },
  ],
  advantages: {
    items: [
      {
        id: 1,
        imageSrc: '/images/Paper.png',
        title: <div>
          <h2 className="text-lg font-bold -tracking-[2px]">Say goodbye to</h2>
          <h2 className="text-lg font-bold -tracking-[2px] text-coral">the hassle of paperwork</h2>
        </div>,
        text: 'Snappily lets you swiftly complete all essential documents digitally, right from home. Designed to be easy-to-use and free of legal jargon, Snappily makes the process smooth and stress-free.',
        bgColor: '#fbe8de'
      },
      {
        id: 2,
        imageSrc: '/images/Rabbit.png',
        title: <div>
          <h2 className="text-lg font-bold -tracking-[2px] text-coral">Speed Up</h2>
          <h2 className="text-lg font-bold -tracking-[2px]">Your Transaction</h2>
        </div>,
        text: 'Snappily simplifies the completion of compliance tasks, saving you time and effort. We cut out the duplication and trim down the questions, aiming to provide information upfront for a more enjoyable (and snappy) home moving experience!',
        bgColor: '#dfdefb'
      },
      {
        id: 3,
        imageSrc: '/images/ScreenWithList.png',
        title: <div>
          <h2 className="text-lg font-bold -tracking-[2px] text-coral">Securely Manage</h2>
          <h2 className="text-lg font-bold -tracking-[2px]">Documents</h2>
        </div>,
        text: 'Our digital platform offers a secure way to manage your documents. You can easily upload, review, and sign documents, all stored in one place for convenient access and peace of mind. With Snappily, documents can be securely shared between relevant parties, ensuring seamless collaboration.',
        bgColor: '#ffffff'
      }
    ]
  },
  offer: {
    title: <h1 className="text-2xl font-bold -tracking-[2px] max-w-[500px] text-white text-center"><span className="text-coral">What do we offer </span>to our customers?</h1>,
    text: 'We\'ve crafted our Compliance app to seamlessly integrate into your agency. With our 5-in-1 solution, simplicity reigns supreme because we believe less is more.'
  },
  worryList: [
    [{ id: 1, title: 'And what\'s off your worry list?' }, { id: 2, icon: <StepsIcon />, text: 'No need for detective work on title deeds' }],
    [{ id: 3, icon: <LaptopIcon />, text: 'Printing and reviewing copies of Passports and Utility Bills. We’ve gone digital' }, { id: 4, icon: <TableIcon />, text: 'Manually tracking on excel spreadsheets' }],
    [{ id: 5, icon: <InfoIcon />, text: 'Deciphering Property information form answers' }, { id: 6, icon: <MessageIcon />, text: 'Calling and chasing customers to sign Terms of Business' }],
  ],
  benefit: <h2 className="text-semi-md leading-[40px] -tracking-[2px] font-semibold text-white text-center">Streamlining five different compliance processes into one single platform means <span style={{ color: 'rgba(255, 255, 255, .24)' }}>no more juggling multiple logins. This saves time for both your customers and your agency, providing a convenient one-stop-shop for all home move compliance needs.</span></h2>,
  tabs: {
    title: 'What’s Included?',
    items: [
      {
        id: 1,
        title: 'Compliance Platform',
        imageSrc: '/images/CompliancePlatform.png',
        imageStyle: 'top-[30px]'
      },
      {
        id: 2,
        title: 'Seller & Buyer App',
        imageSrc: '/images/SellerAndBuyerApp.png',
        imageStyle: 'top-[32px]'
      },
      {
        id: 3,
        title: 'Snappily Service',
        imageSrc: '/images/SnappilyService.png',
        imageStyle: 'left-[100px] -top-[17px]'
      },
      {
        id: 4,
        title: 'Conveyancer Integration',
        imageSrc: '/images/ConveyancerIntegration.png',
        imageStyle: 'left-[15px] top-[33px]'
      },
      {
        id: 5,
        title: 'Alto CRM Integration*',
        imageSrc: '/images/AltoCRMIntegration.png',
        imageStyle: '-top-[28px]'
      }
    ]
  }
};
