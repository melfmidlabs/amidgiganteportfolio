namespace AmidPortfolio.Models
{
    public class ProjectModel
    {
        public int Id { get; set; }
        public string Number { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;

        public string Category { get; set; } = string.Empty;

        public string Year { get; set; } = string.Empty;

        public bool Featured { get; set; }

        public string Description { get; set; } = string.Empty;

        public string ImageUrl { get; set; } = string.Empty;

        public List<string> Technologies { get; set; } = [];

        public string LiveUrl { get; set; } = string.Empty;
        public string GithubUrl { get; set; } = string.Empty;

        public List<string> Images { get; set; } = [];
    }
}
