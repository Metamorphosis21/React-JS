export const NavUI = [
    {
      "title": "Home",
      "url": "/home",
    },
    {
      "title": "About Us",
      "url": "/about",
      "children": [
        {
          "title": "Our Team",
          "url": "/about/team",
          "children": [
          {
            "title": "John Doe",
            "url": "/about/team/john-doe",
            "position": "CEO"
          },
          {
            "title": "Jane Smith",
            "url": "/about/team/jane-smith",
            "position": "CTO"
          },
          {
            "title": "Bob Johnson",
            "url": "/about/team/bob-johnson",
            "position": "CMO"
          }
        ]
        },
        {
          "title": "Mission & Vision",
          "url": "/about/mission",
        }
      ]
    },
    {
      "title": "Services",
      "url": "/services",
      "children": [
        {
          "title": "Web Development",
          "url": "/services/web-development",
          "children": [
            {
              "title": "React.js",
              "url": "/services/cloud-solutions/aws",
            },
            {
              "title": "Node.js",
              "url": "/services/cloud-solutions/azure",
            }
          ]
        },
        {
          "title": "Mobile Development",
          "url": "/services/mobile-development",
          "children": [
            {
              "title": "React Native",
              "url": "/services/cloud-solutions/aws",
            },
            {
              "title": "Dart",
              "url": "/services/cloud-solutions/azure",
            }
          ]
        },
        {
          "title": "Cloud Solutions",
          "url": "/services/cloud-solutions",
          "children": [
            {
              "title": "AWS",
              "url": "/services/cloud-solutions/aws",
            },
            {
              "title": "Azure",
              "url": "/services/cloud-solutions/azure",
            }
          ]
        }
      ]
    },
    {
      "title": "Contact",
      "url": "/contact",
    }
  ];