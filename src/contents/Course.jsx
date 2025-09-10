import ContentList from '../course/components/FixContentList';
import Fix from '../course/Fix';


export function Course() {
  return (
    <div>
      <div className='Course-line'>
        <ContentList />
        <Fix />
      </div>
    </div>
  );
}