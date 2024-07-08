import React from 'react';

const Dashboard = () => {
  // Replace with your actual scraped data
  const scrapedData = [
    {
      id: 1,
      title: 'Sample Video 1',
      description: 'Description for video 1',
      views: 100,
      uploadDate: '2023-01-01',
    },
    {
      id: 2,
      title: 'Sample Video 2',
      description: 'Description for video 2',
      views: 200,
      uploadDate: '2023-02-01',
    },
  ];

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="form-group">
        <label>YouTube URL</label>
        <input type="text" className="form-control" placeholder="Enter YouTube URL" />
        <button className="btn btn-primary mt-2">Scrape</button>
      </div>
      <h3>Scraped Data</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Views</th>
            <th>Upload Date</th>
          </tr>
        </thead>
        <tbody>
          {scrapedData.map((data) => (
            <tr key={data.id}>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.views}</td>
              <td>{data.uploadDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
