import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './r2.css';
import ImportExportIcon from '@material-ui/icons/ImportExport';

const R4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const info = await axios.get(
          'http://api.mediastack.com/v1/news?access_key=23d6101f0b33be2f52f44f6474792eee& search = abc'
        );

        setData(info.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (!data) return <h1>cargando</h1>;

  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              <div className='title'>
                Author
                <ImportExportIcon />
              </div>
            </th>
            <th>
              <div className='title'>
                Category
                <ImportExportIcon />
              </div>
            </th>
            <th>
              <div className='title'>
                country
                <ImportExportIcon />
              </div>
            </th>
            <th>
              <div className='title'>
                Title
                <ImportExportIcon />
              </div>
            </th>
            <th>
              <div className='title'>
                Source
                <ImportExportIcon />
              </div>
            </th>
            <th>
              <div className='title'>
                Published_At
                <ImportExportIcon />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className='body'>
          {data.map((d, index) => (
            <tr key={index}>
              <td data-label='Author'>
                {' '}
                {d.author ? d.author : 'desconocido'}
              </td>
              <td data-label='Category'>{d.category}</td>
              <td data-label='country'> {d.country}</td>
              <td data-label='Title'>{d.title}</td>
              <td data-label='Source'>{d.source}</td>
              <td data-label='Published_At'>{d.published_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default R4;
