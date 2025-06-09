import { 
    ALL_PRIORITIES, 
    ALL_STATUSES, 
    DONE, 
    FILTER_TEXT, 
    HIGH, 
    IN_PROGESS, 
    LOW, 
    MEDIUM, 
    TO_DO 
} from '@/lib/constants';
import { useState } from 'react';

interface Props {
  onFilter: (filters: { status: string; priority: string }) => void;
}

const  FilterBar = ({ onFilter }: Props) => {
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  const handleFilter = () => {
    onFilter({ status, priority });
  };

  return (
    <div className="flex gap-4 mb-4">
      <select onChange={(e) => setStatus(e.target.value)} value={status} className="select">
        <option value="">{ALL_STATUSES}</option>
        <option value="To Do">{TO_DO}</option>
        <option value="In Progress">{IN_PROGESS}</option>
        <option value="Done">{DONE}</option>
      </select>
      <select onChange={(e) => setPriority(e.target.value)} value={priority} className="select">
        <option value="">{ALL_PRIORITIES}</option>
        <option value="Low">{LOW}</option>
        <option value="Medium">{MEDIUM}</option>
        <option value="High">{HIGH}</option>
      </select>
      <button onClick={handleFilter} className="btn">{FILTER_TEXT}</button>
    </div>
  );
}

export default FilterBar;