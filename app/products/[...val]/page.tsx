interface Params {
  params: {
    val: string;
  };
}

const values = async (params: Params) => {
  const values = await params.params.val;
  console.log(values);
  return <div>page</div>;
};

export default values;
