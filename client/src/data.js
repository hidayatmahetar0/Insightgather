const Menu = [
    
         {
          img: "images/01.png",
          name: "Open Redirect",
          link: "https://www.google.com/search?q=site:domainname%20inurl:redir%20|%20inurl:url%20|%20inurl:redirect%20|%20inurl:return%20|%20inurl:src=http%20|%20inurl:r=http"
        },
         {
          img: "images/02.png",
          name: "Robot txt",
          link: "https://www.google.com/search?q=domainname+robots.txt"
        },
        {
          img: "images/03.png",
          name: "Password files",
          link: "https://www.google.com/search?q=site:domainname 'password' filetype:doc | filetype:pdf | filetype:docx | filetype:xls | filetype:dat | filetype:log"
        },
        {
          img: "images/04.jpg",
          name: "Directory Listing",
          link: "https://www.google.com/search?q=site:domainname intitle:index.of  | 'parent directory'"
        },
        {
          img: "images/05.png",
          name: "Database related",
          link: "https://www.google.com/search?q=site:domainname intext:'sql syntax near' | intext:'syntax error has occurred' | intext:'incorrect syntax near' | intext:'unexpected end of SQL command' | intext:'Warning: mysql_connect()' | intext:'Warning: mysql_query() | intext:'Warning: pg_connect()' | filetype:sqlext:sql | ext:dbf | ext:mdb"
        },
        {
          img: "images/06.png",
          name: "Config and log files",
          link: "https://www.google.com/search?q=site:domainname ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini | ext:log"
        },
        {
          img: "images/07.png",
          name: "Backup files",
          link: "https://www.google.com/search?q=site:domainname ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup"
        },
        {
          img: "images/08.png",
          name: "Login Pages",
          link: "https://www.google.com/search?q=site:domainname inurl:login | inurl:signin | intitle:Login | intitle: signin | inurl:auth"
        },
        {
          img: "images/09.png",
          name: "phpinfo()",
          link: "https://google.com/search?q=site:domainname ext:php intitle:phpinfo 'published by the PHP Group'"
        },
        {
          img: "images/10.png",
          name: "Search in GitHub",
          link: "https://github.com/search?q=domainname"
        },
        {
          img: "images/11.png",
          name: "Find subdomains",
          link: "https://google.com/search?q=site:*.domainname"
        },
        {
          img: "images/12.png",
          name: "Reverse ip lookup",
          link: "https://viewdns.info/reverseip/?host=domainname&t=1"
        },
        {
          img: "images/13.png",
          name: "Search in crt.sh",
          link: "https://crt.sh/?q=domainname"
        },
        {
          img: "images/14.png",
          name: "S3 Bucket",
          link: "https://google.com/search?q=site:.s3.amazonaws.com 'domainname'"
        },
        {
          img: "images/15.png",
          name: "Search in StackOverflow",
          link: "https://google.com/search?q=site:stackoverflow.com 'domainname'"
        },
        {
          img: "images/16.png",
          name: "Search in pasting sites",
          link: "https://google.com/search?q=site:pastebin.com | site:paste2.org | site:pastehtml.com | site:slexy.org | site:snipplr.com | site:snipt.net | site:textsnip.com | site:bitpaste.app | site:justpaste.it | site:heypasteit.com | site:hastebin.com | site:dpaste.org | site:dpaste.com | site:codepad.org | site:jsitor.com | site:codepen.io | site:jsfiddle.net | site:dotnetfiddle.net | site:phpfiddle.org | site:ide.geeksforgeeks.org | site:repl.it | site:ideone.com | site:paste.debian.net | site:paste.org | site:paste.org.ru | site:codebeautify.org  | site:codeshare.io | site:trello.com 'domainname'"
        },
        {
          img: "images/17.png",
          name: "What CMS?",
          link: "https://whatcms.org/?s=domainname"
        },
        {
          img: "images/18.png",
          name: "WordPress Contents",
          link: "https://google.com/search?q=site:domainname inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download"
        },
        {
          img: "images/18.png",
          name: "Wordpress deep search",
          link: "http://wwwb-dedup.us.archive.org:8083/cdx/search?url=domainname/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx="
        },
        {
          img: "images/19.png",
          name: "Vulnerable search string",
          link: "https://google.com/search?q=site:domainname inurl:php?=id1 | inurl:index.php?id= | inurl:pageid= | inurl:.php?"
        },
        {
          img: "images/20.png",
          name: "SSL Server Test",
          link: "https://www.ssllabs.com/ssltest/analyze.html?d=domainname"
        },
        {
          img: "images/21.svg",
          name: "Search in Wayback Machine(Internet Archive)",
          link: "https://web.archive.org/web/*/domainname/*"
        },
        {
          img: "images/22.png",
          name: "Search in Shodan.io",
          link: "https://www.shodan.io/search?query=domainname"
        },
        {
          img: "images/22.png",
          name: "Search ingrep.app</b>",
          link: "https://grep.app/search?q=domainname"
        },
        {
          img: "images/23.png",
          name: "Check Security Headers",
          link: "https://securityheaders.com/?q=domainname&followRedirects=on"
        },
        {
          img: "images/545.png",
          name: "SQL Error",
          link: "https://www.google.com/search?q=site:domainname intext:\"sql syntax near\" | intext:\"syntax error has occurred\" | intext:\"incorrect syntax near\" | intext:\"unexpected end of SQL command\" | intext:\"Warning: mysql_connect()\" | intext:\"Warning: mysql_query()\" | intext:\"Warning: pg_connect()\""
        },
        {
          img: "images/545.png",
          name: "Domain Eye",
          link: " https://domaineye.com/similar/domainname"
        },
        {
          img: "images/545.png",
          name: "Publicly Exposed Documents",
          link: "https://www.google.com/search?q=site:domainname ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv"
        },
        {
          img: "images/545.png",
          name: "Install / Setup file",
          link: "https://www.google.com/search?q=site:domainname inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config"
        },
        {
          img: "images/545.png",
          name: "3rd party expo",
          link:  "https://www.google.com/search?q=site%3Ahttp%3A%2F%2Fideone.com+|+site%3Ahttp%3A%2F%2Fcodebeautify.org+|+site%3Ahttp%3A%2F%2Fcodeshare.io+|+site%3Ahttp%3A%2F%2Fcodepen.io+|+site%3Ahttp%3A%2F%2Frepl.it+|+site%3Ahttp%3A%2F%2Fjustpaste.it+|+site%3Ahttp%3A%2F%2Fpastebin.com+|+site%3Ahttp%3A%2F%2Fjsfiddle.net+|+site%3Ahttp%3A%2F%2Ftrello.com+|+site%3A*.atlassian.net+|+site%3Abitbucket.org+ domainname"
        }
        
      
];

export default Menu;