class Alpha
{
	public static void main(String args[])
	{ char a=65,b=65;
		System.out.print("\n Inverse triangle \n"); 

for(int i=5;i>=1;i--){
for(int j=5;j>i;j--){
System.out.print(" ");
}
for(int k=1;k<(i*2);k++){
System.out.print(a);
a++;
}
System.out.println();
}

 System.out.println("\nSquare\n");
 
 a=65;
 
for(int i=0;i<5;i++){
for(int j=0;j<5;j++){
System.out.print(a);
System.out.print(" ");
b++;
}
System.out.println();
}
System.out.println("\n Diamond \n");
for(int i=1;i<=4;i++)
{
for(int j=i;j<4;j++)
{
System.out.print(" ");
}
for(int k=1;k<(i*2);k++)
{
System.out.print((char)a++);
}
System.out.println();
}
for(int i=3;i>=1;i--)
{
for(int j=4;j>i;j--)
{
System.out.print(" ");
}
for(int k=1;k<(i*2);k++)
{
System.out.print((char)a++);
}
System.out.println();
}


System.out.print("\n traingle \n");
a=65;

for(int i=1; i<=5; i++)
{
for(int j=4; j>=i; j--)
{
System.out.print(" ");
}
for(int k=1; k<=(2*i-1); k++)
{
System.out.print(a++);
}
System.out.println("");
}



	}
}
