class One{
	int a=10;
}
class two{
	int b=20;
}
class three{
	int c=30;
}

class Single extends One{
	int b=++a;
	void print(){
			
	System.out.println("single-level"+" "+(b));
}
}

class Multilevel extends Single{
	int d=++b;
	void print(){
		
		System.out.println("multi-level"+" "+(d));
	}
}

class Hierarchy_one extends two{
	void print(){
		System.out.println("hierarchy-one"+" "+(++b));
	}
}

class Hierarchy_two extends two{
	void print(){
		System.out.println("hierarchy-two"+" "+(++b));
	}
}


public class Inherit {
	
	public static void main(String args[])
	{
		Single obj=new Single();
		obj.print();
		Multilevel obj1=new Multilevel();
		obj1.print();
		Hierarchy_one obj2=new Hierarchy_one();
		obj2.print();
		Hierarchy_two obj3=new Hierarchy_two();
		obj3.print();
		
	}

}
