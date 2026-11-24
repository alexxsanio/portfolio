export const data = [
    {
        "projectname": "Video Game Sales Statistical Analysis",
        "description": `Sourced 16,598 global video game sales records from NA, EU, JP and Other regions on Kaggle. Used data visualization, investigated correlations between sales in different regions. Then calculated the statistical significance of categorical variables on sales and the interactions between them. 
        Compared and ranked the total v.s. average sales per publisher and found out Take-Two Interactive moved from 6th to 2nd, likely because they don't own as much games but have produced widely popular game series such as Grand Theft Auto, Red Dead, BioShock and Borderlands. 
        After conducting the above analysis, the notebook conducted MLR modeling to predict North America sales. Diagnosed the model and concluded that the pattern follows the power law, which is highly non-linear. Zero sales have a strong presence in the dataset where the sales have precision up to two decimal point. 
        The notebook then trained a logitical regression model to predict if a game will sale or not with an overall accuracy of 91.98% and a linear regression model for the sales of game that's sold with an overall MSE of 0.2808. Sampling the top 6 records and 6 random records showed that large number of sales makes the prediction skewed and larger sales prediction is associated with larger sales, so the prediction follows the general trend relatively closely.`,
        "link": "https://www.kaggle.com/code/tianyimasf/r-feature-analysis-modeling"
    },
    {
        "projectname": "Visualize Optimized Electric Grid Configuration with EV and DER Integration",
        "description": `Using optimization in Python, considered resiliency as tuning parameter, cost and autonomy as success metrics to generate EV profiles based on load, solar and wind profile and assuming any DER configuration.
        Visualized the equilibrium in a dashboard where EV and DER configurations are customizable.`,
        "link": "https://docs.google.com/presentation/d/e/2PACX-1vRRKiGp4o3V4iFhPHk2dDIVvRounOrQfJDNkk0lDfDJm1lNdr9hfu11eAG4VNmmQQ/pub?start=false&loop=false&delayms=3000"
    },
    {
        "projectname": "Financial Analysis in Excel: art prints and merches business case study",
        "description": `XXX is a pop art individual business that originated in XX, Colorado at the Coffee shop. 
        The art protrays local and popular female icons, and independent, strong strong woman models. It also investigates underground culture references, and what it means to be a strong woman and cultural figure. 
        The medium to large art prints are produced and sold in $200/each, merches are produced in sets of crop tops, tanks, tees, hoodies and soft sleeve shirts. 
        They're sourced online and printed using local services. They're sold in local winter and holiday art shows, and this is the financial analysis case study in Google Sheets that simulates the business and its financials in Q4. `,
        "link": "https://docs.google.com/spreadsheets/d/1wHVkrxd0-6LbPUtWQSXBKbBd2oa5CpE41uQJnDw2pFA/edit?usp=sharing"
    },
    {
        "projectname": "A Review Of Backend Engineer Jobs",
        "description": `Used jobspy Python library to scrape 3060 backend engineering job across 43 states in the US. Visualized the job counts and salary distributions, as well as job levels across different states using geopy and box chart.
        Developed a wordcloud of common companies that's hiring, most frequent industries, and a quater/three-quater split pie chart of remote vs. non-remote jobs. 
        Used the library sentence_transformers to convert the about section of job descriptions into numerical vectors, and then used KMeans to cluster them so that common themes of companies show up in a 3d visualization.
        Used similar techniques to cluster and surface common key phrases of job responsibilities, requirements and benefits.`,
        "link": "https://alexxsanio.github.io/posts/2025-11-25-backend-eng-review/"
    },
    {
        "projectname": "Critical Mineral Prediction for Humanitarian Aid",
        "description": `Selected vulnerable locations based on five indicators of global poverty, including wealth, water access and quality, and women’s education for over 100,000 coordinate sets across the Global South.
        Filtered global geoscientific maps to associate each training and testing location with rich soil, whole rock and terrain features. Created a novel dataset of 10k rows of 1759 geoscientific features.
        Conducted hyperparameter-tuning and trained a xgboost model to predict critical/non-critical mineral and no mineral classes with 78% accuracy, 66% precision and 41% recall for the critical mineral class. 
        Embedded the 1759 geoscientific features to dimensions of 64, 128 and 384 with comparable performance (-3% accuracy) using vanilla autoencoders with dropout.`,
        "link": "https://medium.com/@tianyi437/critical-mineral-prediction-for-humanitarian-aid-64d1c7a7c031"
    },
    {
        "projectname": "Wheat Price Shock Forecast",
        "description": `Predicted prices for wheat, maize, rice, and barley from markets across the world going as far back as the 1990s the start of the Russia invasion of Ukraine, tasked with forecasting how this conflict will impact grain prices in markets around the world for the next 3 months.
        Processed the dataset by calculating the medium price across all markets for each crop and time period. Built the training dataset the same way we pre-train an LLM. LLM is based on next word prediction based on a sequence of previous words. Here we predict the fifth month given previous 4 months using Transformer.
        For example, starting from July - Oct at previous year to predict Nov's price_usd, igc_<crop>, then using Aug - Nov to predict Dec, etc., up until Feb - May to predict June. We'll use data starting July 2017 up until March 2022. `,
        "link": "https://www.kaggle.com/code/tianyimasf/wheat-price-shock-forecast"
    },
    {
        "projectname": "threadscraper",
        "description": `Commandline tool to scrape threads from a list of user profiles given a list of usernames, specified in settings.yaml or as arguments of the commandline call. 
        Scrapes username, text, reply_count, like_count, reshare_count, repost_count, created_at, url of thread, for each recent thread under the user profile, then save the entries in a csv file under the data folder.`,
        "link": "https://github.com/alexxsanio/threadscraper"
    },
    {
        "projectname": "databot",
        "description": `A chatbot that scrapes research data from html pages. The bot takes an url from user, scrapes selector data according to user specification and returns the data in a csv file. 
        It then takes randomly 10 entries from the initial search result, scrapes the webpages returned by google searching the entry term by summarizing the most relevant terms based on returned data. 
        The summarized fields are returned to the user-side, the chatbot then prompts the user to select which fields to scrape for all entries in the initial search result. The bot then execute the dataset enrichement
        and returns the final, full dataset in a csv file for the user to download. If in any step the search and summarization failed, the bot will pause the pipeline and return the error reason.`,
        "link": "https://github.com/alexxsanio/databot"
    },
    {
        "projectname": "AccidentsMap",
        "description": `A GIS map that displays car crash accidents in Colorado. Allows user to mark car crash locations, timestamps, severity level and photos to the map.`,
        "link": "https://github.com/alexxsanio/AccidentsMap"
    },
    {
        "projectname": "diary",
        "description": `A webpage where you can speak out about your thoughts. Boot the app locally in 2 steps. Type in your thoughts and save entries as an image.`,
        "link": "https://github.com/alexxsanio/diary"
    },
]