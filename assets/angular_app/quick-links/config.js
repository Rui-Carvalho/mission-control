angular.module('mcApp.quickLinks',
    [
    ]
)
.constant('panelListConstant', [ 
    {
        name : 'Jira',
        title : 'Jira',
        text : 'Project Management tool used in BoF Agile software development. Stories can be found in the backlog then selected for sprint backlogs.',
        linkhref : 'https://d-labs.atlassian.net/login',
        linktext : 'Jira Board',
        imgFile : 'jira_board.png'
    },
    {
        name : 'NewRelic',
        title : 'New Relic',
        text : 'Monitoring tool for all servers and apps running for BoF.',
        linkhref : 'http://newrelic.com/',
        linktext : 'NewRelic',
        imgFile : 'newrelic_board.png'

    },
    {
        name : 'Admin',
        title : 'Admin App',
        text : 'This is the app that allows to admin BoF apart from Wordpress related things. Includes Newsletter builder, and so on.',
        linkhref : 'http://admin.businessoffashion.com/',
        linktext : 'Admin',
        imgFile : 'adminbof_board.png'

    },
    {
        name : 'AWS',
        title : 'Amazon Web Services',
        text : 'All instances and configuration for Amazon Web Services in this console management.',
        linkhref : 'http://console.aws.amazon.com/',
        linktext : 'AWS',
        imgFile : 'aws_board.png'

    },
    {
        name : 'Dashboard',
        title : 'Dashboard',
        text : 'An app that allow to monitor all data in BoF, like google analytics reports, data related graphs, and so on.', 
        linkhref : 'http://dashboard.businessoffashion.com/',
        linktext : 'Dashboard',
        imgFile : 'dashboard_board.png'

    },
    {
        name : 'phpMyAdmin',
        title : 'phpMyAdmin',
        text : 'MySQL administration app to manage all relational databases in BoF on your local machine.', 
        linkhref : 'http://tools.bof.lan/phpmyadmin/',
        linktext : 'phpMyAdmin',
        imgFile : 'phpmyadmin_board.png'

    },
    {
        name : 'RockMongo',
        title : 'RockMongo',
        text : 'This a web app to manage all MongoDB document based databases running on your local machine.', 
        linkhref : 'http://tools.bof.lan/rockmongo/',
        linktext : 'RockMongo',
        imgFile : 'rockmongo_board.png'

    },
    {
        name : 'RoundCube',
        title : 'RoundCube',
        text : 'Web application to manage your local email from your devbox.', 
        linkhref : 'http://tools.bof.lan/roundcube/',
        linktext : 'RoundCube',
        imgFile : 'roundcube_board.png'

    },
    {
        name : 'Trello',
        title : 'Trello',
        text : 'Web app to manage all business level projects that are not suited to be managed through Jira.', 
        linkhref : 'http://www.trello.com/',
        linktext : 'Trello',
        imgFile : 'trello_board.png'

    },
    {
        name : 'Wordpress',
        title : 'WordPress Admin',
        text : 'Wordpress CMS backoffice to admin all content related material on Business of Fashion FE web site.', 
        linkhref : 'http://www.businessoffashion.com/wp/wp-admin/',
        linktext : 'WP-Admin',
        imgFile : 'wpadmin_board.png'

    }

]

);
