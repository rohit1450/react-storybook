const ProcessComponentOne = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-lg font-bold">Start Payment</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        distinctio ipsum. Quae quos amet quia molestias velit! Id cupiditate
        exercitationem eveniet nesciunt inventore nemo harum odio placeat
        deleniti quos obcaecati, libero aliquam laboriosam. Dignissimos, hic.
        Cum quis et fuga voluptate cupiditate commodi incidunt quae asperiores
        autem reiciendis? Similique, velit ducimus.
      </p>
    </div>
  );
};

const ProcessComponentTwo = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-lg font-bold">Process Payment</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        distinctio ipsum. Quae quos amet quia molestias velit! Id cupiditate
        exercitationem eveniet nesciunt inventore nemo harum odio placeat
        deleniti quos obcaecati, libero aliquam laboriosam. Dignissimos, hic.
        Cum quis et fuga voluptate cupiditate commodi incidunt quae asperiores
        autem reiciendis? Similique, velit ducimus.
      </p>
    </div>
  );
};

const ProcessComponentThree = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-lg font-bold">Finished Payment</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        distinctio ipsum. Quae quos amet quia molestias velit! Id cupiditate
        exercitationem eveniet nesciunt inventore nemo harum odio placeat
        deleniti quos obcaecati, libero aliquam laboriosam. Dignissimos, hic.
        Cum quis et fuga voluptate cupiditate commodi incidunt quae asperiores
        autem reiciendis? Similique, velit ducimus.
      </p>
    </div>
  );
};

const detailComponent = [
  <ProcessComponentOne />,
  <ProcessComponentTwo />,
  <ProcessComponentThree />,
];

export default detailComponent;
