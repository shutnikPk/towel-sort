
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if(matrix==undefined||matrix.length==0){
        return [];
    }

    for (let i=1;i<matrix.length;i+=2){
        matrix[i] = matrix[i].reverse();
    }
    
    matrix=matrix.map(item=>item.join(' '));
    matrix=matrix.join(' ');   
    matrix = matrix.split(' ');
    matrix = matrix.map(item => +item);
  return matrix;
}
