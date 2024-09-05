'use client';

import { useEffect, useState } from 'react';
import { useValueContext } from './ValueContext';
import ListProject from 'src/app/components/UI/ListProject';
import dataJson from '../../data.json';

export default function FilteredProjectList() {
  const [projectRender, setProjectRender] = useState(dataJson.data);
  const { filters } = useValueContext();

  useEffect(() => {
    let filteredProjects = dataJson.data;

    // Фильтрация по значению поиска
    if (filters.searchValue) {
      filteredProjects = filteredProjects.filter(item => {
        return (
          item.projectDescription
            .toLowerCase()
            .includes(filters.searchValue.toLowerCase()) ||
          item.author.toLowerCase().includes(filters.searchValue.toLowerCase())
        );
      });
    }

    // Обновление состояния с новыми данными после фильтрации
    setProjectRender(filteredProjects);
  }, [filters.searchValue]);

  return (
    <div>
      <div>Filter with Project List</div>
      <ListProject projects={projectRender} />
    </div>
  );
}
