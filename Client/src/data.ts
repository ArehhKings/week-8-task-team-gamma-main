export const menu = [
    {
        id: 1,
        title: "Main",
        listItems:[
            {
            id: 1,
            title: "Home",
            url: "/",
            icon: "home.svg"
            },
            // {
            // id: 2,
            // title: "Profile",
            // url: "/users/1",
            // icon: "user.svg",
            // },
        ],
    },
    {
        id: 2,
        title: "Lists",
        listItems:[
            {
            id: 1,
            title: "All Users",
            url: "/users",
            icon: "user.svg",
            },
            {
            id: 2,
            title: "Property Owners",
            url: "/owners",
            icon: "userIcon.svg",
            },
    
            {
            id: 3,
            title: "Property",
            url: "/property",
            icon: "element.svg",
            },
        ],
    },
    {
        id: 3,
        title: "General",
        listItems:[
            // {
            // id: 1,
            // title: "Settings",
            // url: "/",
            // icon: "setting.svg",
            // },
            // {
            // id: 2,
            // title: "Forms",
            // url: "/",
            // icon: "form.svg",
            // },
            {
            id: 1,
            title: "Logout",
            url: "/logout",
            icon: "log.svg",
            },
        ],
    },
];


  

export const topOwners = [
    {
        id: 1,
        img: "https://img.freepik.com/free-photo/portrait-dark-skinned-confident-man-with-curly-afro-hairstyle-has-calm-face-expression_273609-8520.jpg",
        username: "John Doe",
        email: "example.email.com",
        property: "32",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&w=1000&q=80",
        username: "John Doe",
        email: "example.email.com",
        property: "22",
    },
    {
        id: 3,
        img: "https://media.istockphoto.com/id/1280113805/photo/smiling-young-woman-beauty-close-up-portrait.jpg?s=612x612&w=0&k=20&c=11GhfzV2ZdNaikNwncxvGQARw4MoT22DDfzqs4UpqL0=",
        username: "John Doe",
        email: "example.email.com",
        property: "16",
    },
    {
        id: 4,
        img: "https://media.istockphoto.com/id/1280113805/photo/smiling-young-woman-beauty-close-up-portrait.jpg?s=612x612&w=0&k=20&c=11GhfzV2ZdNaikNwncxvGQARw4MoT22DDfzqs4UpqL0=",
        username: "John Doe",
        email: "example.email.com",
        property: "73",
    },
    {
        id: 5,
        img: "https://media.istockphoto.com/id/1280113805/photo/smiling-young-woman-beauty-close-up-portrait.jpg?s=612x612&w=0&k=20&c=11GhfzV2ZdNaikNwncxvGQARw4MoT22DDfzqs4UpqL0=",
        username: "John Doe",
        email: "example.email.com",
        property: "10",
    }
];

export const chartBoxBongalow = {
    color: '8884d8',
    icon: '/userIcon.svg',
    title: 'Total Bongalows',
    dataKey: 'bongalow',
    number: "83",
    percentage: 41.5,
    chartData: [
        {name: "Sun",  users:15},
        {name: "Mon",  users:20},
        {name: "Tue",  users:22},
        {name: "Wed",  users:6},
        {name: "Thu",  users:30},
        {name: "Fri",  users:8},
        {name: "Sat",  users:7},
    ],

}

export const chartBoxDuplet= {
    color: '#82ca9d',
    icon: '/userIcon.svg',
    title: 'Total Duplets',
    dataKey: 'duplets',
    number: "127",
    percentage: 63.5,
    chartData: [
        {name: "Sun",  users:15},
        {name: "Mon",  users:20},
        {name: "Tue",  users:22},
        {name: "Wed",  users:6},
        {name: "Thu",  users:30},
        {name: "Fri",  users:8},
        {name: "Sat",  users:7},
    ],

}

export const chartBoxConversion = {
    color: "gold",
    icon: '/conversionIcon.svg',
    title: 'Ratio',
    dataKey: 'ratio',
    number: "1.53",
    percentage: 9.3,
    chartData: [
        {name: "Sun",  users:15},
        {name: "Mon",  users:20},
        {name: "Tue",  users:22},
        {name: "Wed",  users:6},
        {name: "Thu",  users:30},
        {name: "Fri",  users:8},
        {name: "Sat",  users:7},
    ],

}
export const chartBoxProperty = {
    color: "#ffc658",
    icon: '/productIcon.svg',
    title: 'Total Property',
    dataKey: 'property',
    number: "153",
    percentage: 32,
    chartData: [
        {name: "Sun",  users:15},
        {name: "Mon",  users:20},
        {name: "Tue",  users:22},
        {name: "Wed",  users:6},
        {name: "Thu",  users:30},
        {name: "Fri",  users:8},
        {name: "Sat",  users:7},
    ],

}

export const chartBoxRevenue = {
    color: '#40F8FF',
    icon: '/revenueIcon.svg',
    title: 'Total Revenue',
    dataKey: 'revenue',
    number: "$ 1,234",
    percentage: -9,
    chartData: [
        {name: "Sun",  users:15},
        {name: "Mon",  users:20},
        {name: "Tue",  users:22},
        {name: "Wed",  users:6},
        {name: "Thu",  users:30},
        {name: "Fri",  users:8},
        {name: "Sat",  users:7},
    ],

}

export const chartBoxAvaliable = {
    color: '#40F8FF',
    icon: '/revenueIcon.svg',
    title: 'Total Avaliable',
    dataKey: 'property',
    number: "166",
    percentage: 1.66,
    chartData: [
        {name: "Sun",  users:15},
        {name: "Mon",  users:20},
        {name: "Tue",  users:22},
        {name: "Wed",  users:6},
        {name: "Thu",  users:30},
        {name: "Fri",  users:8},
        {name: "Sat",  users:7},
    ],

}
export const chartBoxSold = {
    color: '#40F8FF',
    icon: '/revenueIcon.svg',
    title: 'Total Sold',
    dataKey: 'sold',
    number: "34",
    percentage:18,
    chartData: [
        {name: "Sun",  users:15},
        {name: "Mon",  users:20},
        {name: "Tue",  users:22},
        {name: "Wed",  users:6},
        {name: "Thu",  users:30},
        {name: "Fri",  users:8},
        {name: "Sat",  users:7},
    ],

}


export const userRows = [
    {
        id: 1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 2,
        img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&w=1000&q=80",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 3,
        img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&w=1000&q=80",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 4,
        img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&w=1000&q=80",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },    {
        id: 6,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 7,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 8,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 9,
        img:"",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 10,
        img:"",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 11,
        img:"",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 12,
        img:"",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
]


export const properties = [
    {
        id: 1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        building: "Duplets",
        location: "Lagos",
        propertyOwner: "John Doe",
        price: "$1000.00",
        inStock: true,
    },
    {
        id: 2,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        building: "Bungalow",
        location: "Mushin Lagos",
        propertyOwner: "Obi Uloma",
        price: "$200.00",
        inStock: true,
    },
    {
        id: 3,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        building: "Duplets",
        location: "VI Lagos",
        propertyOwner: "Park Abanobi",
        price: "$10000.00",
        inStock: true,
    },
    {
        id: 4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        building: "Bungalow",
        location: "Coka Lagos",
        propertyOwner: "Bode Aliko",
        price: "$800.00",
        inStock: false,
    },
    {
        id: 5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        building: "Duplets",
        location: "Aja Lagos",
        propertyOwner: "John Mark",
        price: "$1200.00",
        inStock: true,
    }
]


export const owners = [
    {
        id: 1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHU-j8HQ3WFS24r5O_zp_buK1shPDsqrxCa4Cu5UyD-g28oPOKg-74BoKNuxWfejUIoVM&usqp=CAU",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 2,
        img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&w=1000&q=80",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
    {
        id: 3,
        img:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&w=1000&q=80",
        lastName: "Snow",
        firstName: "Jon",
        email: "ekwe@example.com",
        phone: "+234 123 456 789",
        createdAt: "2021-01-01",
        verified:true,
    },
]