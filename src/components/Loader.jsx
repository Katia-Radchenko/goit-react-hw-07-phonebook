import { BallTriangle } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <BallTriangle
      visible={true}
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{
        display: 'block',
        width: '100px',
        height: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    />
  );
}
