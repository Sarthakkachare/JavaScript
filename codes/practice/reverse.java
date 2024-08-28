class Demo {
    public static void main(String[] args) {
        String str = "sarthak";
        int start = 0;
        int end = str.length() - 1;
        char arr[] = str.toCharArray();
        while (start < end) {
            char temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        System.out.println(arr);
    }
}