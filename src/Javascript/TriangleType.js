const TriangleType = (l,b,h) => {
    if(l==b && b==h && h==l){
        return 'Equilateral'
    }
    else if(l==b || b==h || h==l){
        return 'Isoceles'
    }
    else if(l!=b && b!=h){
        return "Scalene"
    }
}

console.log(TriangleType(3,3,3));
console.log(TriangleType(3,3,2));
console.log(TriangleType(3,4,5));
export default TriangleType
