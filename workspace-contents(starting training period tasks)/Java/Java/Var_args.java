public class Var_args {
void fun(String str,int ...a){
	System.out.print(str+" ");
	for(int i: a)
		System.out.println(i);
		
}
public static void main(String args[])
{
	Var_args obj=new Var_args();
	obj.fun("nirmal",1);
	obj.fun("pandi",1,2);
	obj.fun("nirmalpandi",1,2,3);
}
}
